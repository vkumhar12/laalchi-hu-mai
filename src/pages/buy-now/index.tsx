import CustomDialog from "@/components/core/CustomDialog";
import AddUserAddressFrom from "@/components/user/AddUserAddressFrom";
import ProductPriceDetails from "@/components/user/ProductDetails";
import Layout from "@/layout/public";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function BuyNow() {
  const [isAddress, setAddress] = useState(false);
  const [isSummary, setIsSummary] = useState(false);
  const [isPayment, setPayment] = useState(false);
  const [userAddress, setUserAddress] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const handlePlaceOrder = () => {
    if (paymentOption) {
      Swal.fire({
        title: "Order Placed!",
        text: `You have chosen to pay ${paymentOption}.`,
        icon: "success",
      }).then(() => {
        setPayment(false);
        router.push(`order-placed`);
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please select a payment option.",
        icon: "error",
      });
    }
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
              <div className="flex flex-col admin-gap">
                <div className="flex justify-between items-center admin-card">
                  <div className="text-xl font-semibold text-primary-text">
                    DELIVERY ADDRESS
                  </div>
                  <p
                    className={`text-xl cursor-pointer `}
                    onClick={() => setAddress((prevState) => !prevState)}
                  >
                    {isAddress ? (
                      <div className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    ) : (
                      <div className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    )}
                  </p>
                </div>
                {isAddress && (
                  <>
                    <div className="flex gap-2 items-center admin-card">
                      <input type="checkbox" />
                      <div className="p-2 rounded-md w-full">
                        <div className="flex justify-between">
                          <p>
                            Infront Y-6, Civil Township, Rourkela - 769004,
                            Odisha
                          </p>
                          <p className="flex">
                            <Tooltip title="Edit">
                              <p className="p-2 rounded-bl-2xl bg-pink-blue text-white cursor-pointer  ">
                                <CiEdit className="text-xl" />
                              </p>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <p className="p-2 rounded-tr-2xl bg-youtube text-white cursor-pointer ">
                                <MdDeleteOutline className="text-xl" />
                              </p>
                            </Tooltip>
                          </p>
                        </div>
                        <p className="flex gap-1 items-center font-medium">
                          <span>
                            <FaPhoneAlt />
                          </span>
                          <span>1203256488</span>
                        </p>
                        <p>Work</p>
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
                    ORDER SUMMARY
                  </div>
                  <p
                    className={`text-xl cursor-pointer `}
                    onClick={() => setIsSummary((prevState) => !prevState)}
                  >
                    {isSummary ? (
                      <div className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    ) : (
                      <div className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    )}
                  </p>
                </div>
                {isSummary && (
                  <div className="admin-card flex flex-col gap-4">
                    <hr />
                    <div className="flex gap-2 ">
                      <div className="flex flex-col gap-3">
                        <img
                          src=""
                          alt="order"
                          className="w-36 h-44 rounded-md border border-gary-300"
                        />
                        <p className="text-lg text-center font-semibold">
                          Quantity - 2
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl text-primary-text font-semibold">
                          Air Jordan 7 Retro
                        </p>
                        <p className="text-sm font-medium text-primary-text">
                          Men Shoes, Nike
                        </p>
                        <p className="font-medium">12,900</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-end">
                      <button
                        className="p-2 w-fit rounded cursor-pointer bg-whatsapp text-white"
                        onClick={() => setIsSummary(false)}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center  admin-card">
                  <div className="text-xl font-semibold text-primary-text">
                    PAYMENT
                  </div>
                  <p
                    className={`text-xl cursor-pointer `}
                    onClick={() => setPayment((prevState) => !prevState)}
                  >
                    {isPayment ? (
                      <div className="rotate-180 bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    ) : (
                      <div className="bg-pink-blue/10 text-pink-blue p-1 rounded-md h-fit">
                        <FaAngleDown />
                      </div>
                    )}
                  </p>
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
                          onChange={() => setPaymentOption("Cash on Delivery")}
                        />
                        Pay with Cash on Delivery (COD)
                      </label>
                      <label className="flex gap-2">
                        <input
                          type="radio"
                          name="paymentOption"
                          value="online"
                          onChange={() => setPaymentOption("Online")}
                        />
                        Pay Online
                      </label>
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
