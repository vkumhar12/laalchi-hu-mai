/* eslint-disable @next/next/no-img-element */
import { ImageDisplay, SizePicker } from "@/components/core";
import { useMutation, useSwr } from "@/hooks";
import Layout from "@/layout/public";
import { relatedProductsArray } from "@/locals/page.local";
import errorHelper from "@/utils/error";
import { motion } from "framer-motion";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { BiSolidStar } from "react-icons/bi";
import { FaStarHalf } from "react-icons/fa6";

export default function ProductPage() {
  const availableSizes = [6, 7, 8, 9, 10, 11];
  const images = [
    "allcategory1.jpg",
    "allcategory2.jpg",
    "allcategory3.jpg",
    "allcategory4.jpg",
  ];
  const { mutation } = useMutation();
  const { query } = useRouter();
  const { data } = useSwr<{ data: any }>(`product/${query?.productId}`);
  const handleCart = async () => {
    try {
      let res: ResType;
      res = await mutation(`cart`, {
        method: "POST",
        isAlert: true,
        body: {
          productId: query?.productId,
          quantity: 1,
        },
      });
      if (res?.results?.success) {
        router.push(`buy-now`);
      }
    } catch (error) {
      errorHelper(error);
    }
  };
  return (
    <Layout title="Products Page">
      <section className="main-container top-spacing bottom-spacing">
        <div className="pt-7">
          <div className="flex admin-gap items-center justify-center">
            <div className="w-1/2 flex justify-center items-center">
              <ImageDisplay images={images} />
            </div>
            <div className="flex flex-col admin-gap w-1/2">
              <p className="flex ">{renderStars(4.5)}</p>

              <div>
                <h1 className="graph-title">{data?.data?.name}</h1>
                <p>Jordan, Nike</p>
              </div>
              <div className="text-2xl flex font-semibold gap-2 items-end text-pink-blue ">
                ₹{data?.data?.mrp}
                <span className="line-through text-primary-text text-lg ">
                  ₹{data?.data?.mrp}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-primary-text">
                  Color - {data?.data?.color}
                </p>
                <p className="text-lg font-semibold text-primary-text">
                  Quality - {data?.data?.quality}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium text-primary-text">
                  QUICK OVERVIEW :
                </p>
                <hr />
                <p className="line-clamp-3">{data?.data?.desc}</p>
              </div>
              <div className="flex flex-col admin-gap">
                <div className="flex justify-between">
                  <h1 className="tex-lg font-medium">CHOOSE YOUR SIZE</h1>
                  <div className="group">
                    <p className="cursor-pointer transition duration-300 ease-in-out text-sm font-medium">
                      Size Chart
                    </p>
                    <div className="hidden group-hover:block transition duration-300 ease-in-out">
                      <table className="border-collapse border border-gray-200 mt-2">
                        <thead>
                          <tr>
                            <th className="border border-gray-200 px-4 py-2">
                              US Size
                            </th>
                            <th className="border border-gray-200 px-4 py-2">
                              UK Size
                            </th>
                            <th className="border border-gray-200 px-4 py-2">
                              EU Size
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 12 }, (_, index) => {
                            const usSize = index + 6; // Starting from US size 6
                            const ukSize = index + 6 - 0.5; // UK size is typically half a size smaller
                            const euSize = 20 + index; // EU size starts from 36
                            return (
                              <tr key={index}>
                                <td className="border border-gray-200 px-4 py-2">
                                  {usSize}
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                  {ukSize}
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                  {euSize}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <SizePicker availableSizes={availableSizes} />
                </div>
                <div className="flex gap-5">
                  <div
                    className="px-10 py-5 rounded w-1/2 text-center font-medium bg-whatsapp text-white cursor-pointer"
                    onClick={handleCart}
                  >
                    Buy now
                  </div>
                  <div
                    className="px-10 py-5 rounded w-1/2 text-center font-medium bg-pink-blue text-white cursor-pointer"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container bottom-spacing">
        <div className="flex flex-col admin-gap">
          <div className="relative flex flex-col admin-gap">
            <h1 className="text-8xl tracking-widest text-gray-200 font-semibold">
              Related
            </h1>
            <h1 className="graph-title absolute bottom-6 left-2 ">
              ---Related Products---
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 admin-gap">
            {relatedProductsArray?.map((item, index) => (
              <div className="flex flex-col gap-2 relative" key={index}>
                <motion.div
                  layout
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index < 5 ? index * 0.28 : 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className="group overflow-hidden cursor-pointer "
                >
                  <Link href="/product-page" target="_blank">
                    <img src={item?.imageUrl} alt="" className="" />

                    <div className="flex justify-between items-center">
                      <div className="">
                        <h1 className="text-gray-700 font-medium">
                          {item?.name}
                        </h1>
                        <h1 className="text-primary-text text-xs">
                          {item?.category}
                        </h1>
                      </div>
                      <div className="font-medium">₹{item?.price}</div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const renderStars = (rating: any) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <BiSolidStar key={index} className="text-yellow-500 text-2xl" />
      ))}
      {hasHalfStar && <FaStarHalf className="text-yellow-500 text-2xl" />}
    </>
  );
};
