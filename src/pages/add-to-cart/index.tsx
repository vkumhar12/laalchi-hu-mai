import { useMutation, useSwr } from "@/hooks";
import Layout from "@/layout/public";
import { sweetAlertCustomStyles, sweetAlertStyles } from "@/utils";
import errorHelper from "@/utils/error";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

interface ProductDetails {
  _id: string;
  name: string;
  productCode: string;
  quality: string;
  color: string;
  desc: string;
  mrp: number;
  sellingPrice: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CartItem {
  quantity: number;
  subTotal: number;
  productDetails: ProductDetails[];
}

interface CartResponse {
  success: boolean;
  message: string;
  cartItems: CartItem[];
}

/* eslint-disable @next/next/no-img-element */
export default function AddToCart() {
  const cartArray = [
    {
      productName: "Air Force 1",
      productCode: "RF293",
      imageUrl: "/allcategory5.jpg",
      color: "Black& Gold",
      desc: "100% calf leather",
      price: "12000",
    },
    {
      productName: "Nike Air Max",
      productCode: "RF243",
      imageUrl: "/allcategory8.jpg",
      color: "Black& Silver",
      desc: "100% calf leather",
      price: "10,000",
    },
  ];

  const { data, mutate } = useSwr<{ data: CartResponse }>(`cart`);

  const { mutation } = useMutation();

  console.log(data, "Toatal");

  const handleDeleteProductFromCart = (id: string) => {
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
          const res = await mutation(`cart/${id}`, {
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
  const handleIncQuatity = async (id: string) => {
    try {
      await mutation(`cart/inc/${id}`, {
        method: "PUT",
        isAlert: true,
      });
      mutate();
    } catch (error) {
      errorHelper(error);
    }
  };
  const handleDescQuatity = async (id: string) => {
    try {
      await mutation(`cart/dec/${id}`, {
        method: "PUT",
        isAlert: true,
      });
      mutate();
    } catch (error) {
      errorHelper(error);
    }
  };

  return (
    <Layout title="Cart">
      <div className="main-container pt-10 bottom-spacing">
        <h1 className="graph-title">Shopping Cart</h1>
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-gray-800 px-10 py-10">
            <div className="flex justify-between text-white border-b pb-8">
              <h1 className="font-medium text-2xl">Shopping Cart</h1>
              <h2 className="font-medium text-2xl">
                {data?.cartItems?.[0]?.cartItems.length} Items
              </h2>
            </div>
            {data?.cartItems?.map((item: any) =>
              item?.cartItems?.map(
                (item: any, i: number) => (
                  // item?.productDetails?.map((data: any, i: number) => (
                  <div
                    className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
                    key={i}
                  >
                    {item?.productDetails?.imageUrl ? (
                      <div className="md:w-4/12 2xl:w-1/4 w-full">
                        <img
                          src={item?.productDetails?.imageUrl}
                          alt="Sneaker"
                          className="h-full object-center object-cover md:block hidden"
                        />
                      </div>
                    ) : (
                      <div className="md:w-4/12 2xl:w-1/4 w-full">
                        <img
                          src="allcategory1.jpg"
                          alt="Sneaker"
                          className="h-full object-center object-cover md:block hidden"
                        />
                      </div>
                    )}
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                        {item?.productDetails?.productCode}
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-base font-medium leading-none text-gray-800 dark:text-white">
                          {item?.productDetails?.[0]?.name}
                        </p>
                        <div className="flex gap-2 border p-1 rounded-md">
                          <button
                            className="text-white"
                            onClick={() =>
                              handleDescQuatity(item?.productDetails?.[0]?._id)
                            }
                          >
                            -
                          </button>
                          <span className="text-black bg-white px-3 py-1 rounded-md">
                            {item?.quantity}
                          </span>
                          <button
                            className="text-white"
                            onClick={() =>
                              handleIncQuatity(item?.productDetails?.[0]?._id)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                        Color : {item?.productDetails?.[0]?.color}
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                        Description : {item?.productDetails?.[0]?.desc}
                      </p>
                      <div className="flex items-center justify-between pt-5">
                        <div className="flex item s-center">
                          <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                            Add to favorites
                          </p>
                          <p
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                            onClick={() =>
                              handleDeleteProductFromCart(
                                item?.productDetails?.[0]?._id
                              )
                            }
                          >
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                          ₹{item?.productDetails?.[0]?.sellingPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                )
                // ))
              )
            )}

            <Link href="/">
              <div className="flex gap-1 items-center font-medium">
                <p className="text-pink-blue">
                  <FaArrowLeftLong />
                </p>
                <p className="text-white">Continue Shopping</p>
              </div>
            </Link>
          </div>
          <div id="summary" className=" w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <h1 className="font-medium text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-medium text-sm uppercase">Items 2</span>
              <span className="font-medium text-sm">
                {data?.cartItems?.[0]?.total
                  ? `₹${data?.cartItems?.[0]?.total}`
                  : "0"}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm border">
                <option>Standard shipping - 100</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-medium inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full border-2"
              />
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded"
              type="submit"
            >
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-medium justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{data?.cartItems?.[0]?.total}</span>
              </div>
              <Link href="buy-now">
                <button className="bg-indigo-500 font-medium rounded hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
