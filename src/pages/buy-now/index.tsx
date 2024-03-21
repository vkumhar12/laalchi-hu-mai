/* eslint-disable @next/next/no-img-element */
import CustomDialog from "@/components/core/CustomDialog";
import AddToCart from "@/components/product/AddToCart";
import AddUserAddressFrom from "@/components/user/AddUserAddressFrom";
import ProductPriceDetails from "@/components/user/ProductDetails";
import { useMutation, useSwr } from "@/hooks";
import Layout from "@/layout/public";
import { sweetAlertCustomStyles, sweetAlertStyles } from "@/utils";
import errorHelper from "@/utils/error";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function BuyNow() {
  const [isAddress, setAddress] = useState(false);
  // const [isSummary, setIsSummary] = useState(false);
  const [isPayment, setPayment] = useState(false);
  const [userAddress, setUserAddress] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const [isCart, setCart] = useState(false);
  const { mutation, isLoading } = useMutation();
  const { mutation: postMutation } = useMutation();
  const [productId, setProductId] = useState();
  const [addressId, setAddressId] = useState();

  const handlePlaceOrder = async () => {
    try {
      let res: ResType;

      res = await postMutation(`order/cart`, {
        method: "POST",
        isAlert: true,
        body: {
          addressId,
          paymentType: paymentOption,
        },
      });

      if (paymentOption) {
        Swal.fire({
          title: "Order Placed!",
          text: `You have chosen to pay ${paymentOption}.`,
          icon: "success",
        }).then(() => {
          setPayment(false);
          router.push(`userOrders`);
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Please select a payment option.",
          icon: "error",
        });
      }
    } catch (error) {
      errorHelper(error);
    }
  };

  const { data, mutate } = useSwr<{ data: any[] }>(`address`);

  const handleDeleteAddress = (id: string) => {
    try {
      Swal.fire({
        title: "Warning..!",
        text: "Are you sure you want to delete the Product?",
        icon: "warning",
        iconColor: "#FF4D49",
        confirmButtonColor: "#FF4D49",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        customClass: sweetAlertStyles,
        backdrop: sweetAlertCustomStyles,
      }).then(async (result) => {
        if (result?.isConfirmed) {
          const res = await mutation(`address/${id}`, {
            method: "DELETE",
            isAlert: true,
          });
          mutate();
        }
      });
    } catch (error) {
      errorHelper(error);
    }
  };

  const handleRadioChange = (event: any) => {
    setAddressId(event.target.value); // Update the selected address ID when a radio button is clicked
  };

  return (
    <Layout title="CheckOut">
      <>
        <section className="main-container flex flex-col admin-gap bg-slate-100">
          <div className="flex justify-between pt-10">
            <h1 className="graph-title">Price Details</h1>
            <Link href="/">
              <h1 className="text-pink-blue font-medium hover:underline">
                Continue Shopping
              </h1>
            </Link>
          </div>

          <div className="flex admin-gap">
            <div className="flex flex-col admin-gap w-3/5 bottom-spacing">
              <div className="flex justify-between items-center admin-card">
                <div className="text-xl font-semibold text-primary-text">
                  Shopping Cart
                </div>
                <div
                  className={`text-xl cursor-pointer `}
                  onClick={() => setCart((prevState) => !prevState)}
                >
                  {isCart ? (
                    <p className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                      <FaAngleDown />
                    </p>
                  ) : (
                    <p className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                      <FaAngleDown />
                    </p>
                  )}
                </div>
              </div>

              {isCart && (
                <div className="">
                  <AddToCart setProductId={setProductId} />
                </div>
              )}
              <div className="flex flex-col admin-gap">
                <div className="flex justify-between items-center admin-card">
                  <div className="text-xl font-semibold text-primary-text">
                    DELIVERY ADDRESS
                  </div>
                  <div
                    className={`text-xl cursor-pointer `}
                    onClick={() => setAddress((prevState) => !prevState)}
                  >
                    {isAddress ? (
                      <p className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </p>
                    ) : (
                      <p className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </p>
                    )}
                  </div>
                </div>
                {isAddress && (
                  <>
                    <div className="flex gap-2 items-center admin-card">
                      <div className="p-2 rounded-md w-full">
                        {data?.data?.map((item, i) => (
                          <div className="flex gap-2" key={i}>
                            <input
                              type="radio"
                              id={item._id}
                              value={item?._id}
                              checked={addressId === item._id}
                              onChange={handleRadioChange}
                            />
                            <div className="w-full">
                              <div className="flex justify-between">
                                <p>
                                  {item?.houseNo}, {item?.landmark},{" "}
                                  {item?.street},{item?.city}, {item?.state} ,{" "}
                                </p>
                                <p className="flex">
                                  <Tooltip title="Delete">
                                    <p
                                      className="p-2 rounded bg-youtube text-white cursor-pointer "
                                      onClick={() =>
                                        handleDeleteAddress(item?._id)
                                      }
                                    >
                                      <MdDeleteOutline className="text-xl" />
                                    </p>
                                  </Tooltip>
                                </p>
                              </div>
                              <div className="flex gap-1 items-center font-medium">
                                <span>
                                  <FaPhoneAlt />
                                </span>
                                <span>
                                  {item?.phone} , {item?.alternatePhone}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="text-xl font-medium w-fit text-white bg-pink-blue rounded-md px-2 py-1 cursor-pointer"
                      onClick={() => setUserAddress(true)}
                    >
                      Add Address
                    </div>
                  </>
                )}

                <div className="flex justify-between items-center  admin-card">
                  <div className="text-xl font-semibold text-primary-text">
                    PAYMENT
                  </div>
                  <div
                    className={`text-xl cursor-pointer `}
                    onClick={() => setPayment((prevState) => !prevState)}
                  >
                    {isPayment ? (
                      <p className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </p>
                    ) : (
                      <p className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </p>
                    )}
                  </div>
                </div>
                {isPayment && (
                  <div className="flex flex-col gap-2 admin-card">
                    <h1 className="text-xl font-semibold">
                      Select Payment option :
                    </h1>
                    <div>
                      <label className="flex gap-2">
                        <input
                          type="radio"
                          name="paymentOption"
                          value="COD"
                          onChange={() => setPaymentOption("cod")}
                        />
                        Pay with Cash on Delivery (COD)
                      </label>
                      {/* <label className="flex gap-2">
                        <input
                          type="radio"
                          name="paymentOption"
                          value="online"
                          disabled={true}
                          onChange={() => setPaymentOption("Online")}
                        />
                        Pay Online
                      </label> */}
                    </div>
                    <hr />
                    <div className="flex justify-end">
                      <button
                        className="p-2 w-fit rounded cursor-pointer bg-whatsapp text-white"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-2/5 bottom-spacing">
              <ProductPriceDetails />
            </div>
          </div>
        </section>
        <CustomDialog
          maxWidth="md"
          paperProps={{
            style: {
              borderRadius: 18,
            },
          }}
          open={userAddress}
          onClose={() => setUserAddress(false)}
        >
          <AddUserAddressFrom setUserAddress={setUserAddress} />
        </CustomDialog>
      </>
    </Layout>
  );
}
