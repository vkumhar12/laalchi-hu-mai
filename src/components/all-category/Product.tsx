/* eslint-disable @next/next/no-img-element */
import { allCategoryArray } from "@/locals/page.local";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 admin-gap">
        {allCategoryArray?.map((item, index) => (
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
              <img src={item?.imageUrl} alt="" className="" />

              <div className="flex justify-between items-center">
                <div className="">
                  <Link href="/product-page" target="_blank">
                    <h1 className="text-gray-700 font-medium">{item?.name}</h1>
                  </Link>
                  <h1 className="text-primary-text text-xs">
                    {item?.category}
                  </h1>
                </div>
                <div className="font-medium">₹{item?.price}</div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
