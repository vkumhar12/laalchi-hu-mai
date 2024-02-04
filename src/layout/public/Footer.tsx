/* eslint-disable @next/next/no-img-element */

import {
  findStoreArray,
  footerAddress1Array,
  footerAddress2Array,
  productFooterArray,
} from "@/locals/page.local";
import Link from "next/link";
import { useRouter } from "next/router";

// helpTypes.ts

type HelpTopic = {
  title: string;
  url: string;
};

type GetHelpArrayType = HelpTopic;

export const getHelpArray: GetHelpArrayType[] = [
  {
    title: "Order Status",
    url: "/",
  },
  {
    title: "Shipping and Delivery",
    url: "/",
  },
  {
    title: "Returns",
    url: "/",
  },
  {
    title: "Payment Options",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export default function Footer() {
  const router = useRouter();
  const handleItemClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 gap-16 h-[32rem] bg-black text-white">
      <div className="p-8 flex flex-col col-span-2 gap-12">
        <img src="/footer_logo.avif" alt="" className="w-fit h-14" />
        <div className=" flex admin-gap">
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-2xl whitespace-nowrap">
              ADDRESS OFFICE 1
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <p className="whitespace-nowrap">
                460 West 34th Street, 15th floor, New York
              </p>

              {footerAddress1Array?.map((data, i) => (
                <div className="text-white flex gap-2 items-center" key={i}>
                  <p className="">{data?.title} :</p>
                  <p className="">{data?.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-2xl whitespace-nowrap">
              ADDRESS OFFICE 2
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <p className=" whitespace-nowrap">
                PO Box 16122 Collins Victoria 3000 Australia
              </p>

              {footerAddress2Array?.map((data, i) => (
                <div className="flex gap-2 items-center" key={i}>
                  <p className="">{data?.title} :</p>
                  <p className="">{data?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 p-8 flex flex-col admin-gap">
        <div className="h-20 text-2xl font-semibold whitespace-nowrap">
          FIND OUR STORE
        </div>
        <div className="flex flex-col gap-4">
          {findStoreArray?.map((data, i) => (
            <div
              className="text-gray-300 hover:text-gray-200 font-semibold hover:underline common-transition cursor-pointer"
              key={i}
            >
              <Link href="/">{data}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 p-8 flex flex-col admin-gap">
        <div className="h-20 text-2xl font-semibold whitespace-nowrap">
          PRODUCTS
        </div>
        <div className="flex flex-col gap-4">
          {getHelpArray?.map((data, i) => (
            <div
              className="text- font-medium text-gray-300 hover:text-lime-300 hover:underline common-transition cursor-pointer"
              key={i}
            >
              {/* {data?.title} */}
              <Link href={data?.url}>{data?.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 p-8 flex flex-col admin-gap">
        <div className="h-20 text-2xl font-semibold whitespace-nowrap">
          GET HELP
        </div>
        <div className="flex flex-col gap-4">
          {productFooterArray?.map((data, i) => (
            <div
              className="text- font-medium text-gray-300 hover:text-lime-300 hover:underline common-transition cursor-pointer animate__animated animate__fadeIn animate__faster"
              key={i}
            >
              <Link href="/">{data}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
