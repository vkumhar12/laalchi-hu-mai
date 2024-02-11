import Layout from "@/layout/public";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

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
  return (
    <Layout title="Cart">
      <div className="main-container pt-10 bottom-spacing">
        <h1 className="graph-title">Shopping Cart</h1>
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-gray-800 px-10 py-10">
            <div className="flex justify-between text-white border-b pb-8">
              <h1 className="font-medium text-2xl">Shopping Cart</h1>
              <h2 className="font-medium text-2xl">2 Items</h2>
            </div>
            {cartArray?.map((data, i) => (
              <div
                className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
                key={i}
              >
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img
                    src={data?.imageUrl}
                    alt="Sneaker"
                    className="h-full object-center object-cover md:block hidden"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                    {data?.productCode}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-base font-medium leading-none text-gray-800 dark:text-white">
                      {data?.productName}
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="py-1 px-2 rounded border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>

                  <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                    Color:{data?.color}
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                    Description: {data?.desc}
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex item s-center">
                      <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      {data?.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="allcategory8.jpg"
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-medium leading-none text-gray-800 dark:text-white">
                    Air Jordan Retro 7
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-1 px-2 rounded border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>

                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    7,000
                  </p>
                </div>
              </div>
            </div> */}
            <Link href="#">
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
              <span className="font-medium text-sm uppercase">Items 3</span>
              <span className="font-medium text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
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
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-medium justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-medium hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
