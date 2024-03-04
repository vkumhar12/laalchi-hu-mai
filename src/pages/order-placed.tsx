/* eslint-disable @next/next/no-img-element */
import Layout from "@/layout/public";
import { motion } from "framer-motion";

export default function OrderPlaced() {
  const orderStatuses = [
    {
      id: "1",
      title: "Received",
      destination: true,
      img: "/orderstatus/rcv.png",
      message: true,
      status: "Your order has  Confirmed",
      processing: true,
    },

    {
      id: "2",
      title: "Picked",
      destination: false,
      img: "/orderstatus/pick.png",
      message: false,
      status: "Your order has been picked up by your courier partner",
      processing: false,
    },
    {
      id: "3",
      title: "Transit",
      destination: false,
      img: "/orderstatus/transit.png",
      message: false,
      status: "Your order is on its way to customers address",
      processing: false,
    },
    {
      id: "4",
      title: "Out For Delivery",
      destination: false,
      img: "/orderstatus/out.png",
      message: false,
      status: "The courier executive  is on the way to your doorstep",

      processing: false,
    },
    {
      id: "5",
      title: "Reached Location",
      destination: false,
      img: "/orderstatus/location.png",
      message: false,
      status: "Your order has reached your Destination",
    },
  ];
  return (
    <Layout title="Order Placed">
      <section className="flex flex-col admin-gap top-spacing bottom-spacing main-container">
        <div className="flex justify-between admin-card h-20 items-center">
          <p className="text-lg font-semibold">
            Order id: #ndjs4423nsnsjd4nmn2222923ns
          </p>
          <p className="text-sm font-medium text-primary-text">
            21/08/2023 10:48:31 AM
          </p>
        </div>
        <div className="flex flex-col gap-3 admin-card">
          <p className="font-medium">Delivery Address</p>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium">Bhubneswar</h1>
            <p className="text-primary-text text-sm font-medium">
              Infront Y-6, Civil Township, Rourkela - 769004, Odisha
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium">Phone number</h1>
            <p className="text-primary-text text-sm font-medium">
              6290467488, 9668834544
            </p>
          </div>
        </div>
        <div className="admin-card">
          <p className=" text-gray-800 font-semibold text-xl">Order Status</p>
          <div className=" w-full  h-full flex flex-col md:flex-row gap-5   items-start">
            {orderStatuses.map((curEle, index) => {
              return (
                <ProductCard key={curEle.id} item={curEle} index={index} />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const ProductCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: index < 5 ? index * 0.28 : 1 }}
      exit={{ scale: 0, opacity: 0 }}
      viewport={{ once: true }}
      key={index}
      className=" w-full justify-start flex relative md:flex-col flex-row md:gap-3 gap-10"
    >
      {item.processing && (
        <p className="top-4 md:w-full md:h-2 h-full w-1 md:border-b-2 border-l-2 z-30 border-dashed border-green-400 absolute  left-5"></p>
      )}

      <span className=" flex z-40">
        <img
          key={item.id}
          className="h-10 w-10 object-contain"
          src={item.img}
          alt=""
          style={{
            filter: item.destination ? "grayscale(0%)" : "grayscale(100%)",
          }}
        />
      </span>
      <span className="flex flex-col">
        <p className="  text-[0.8rem] font-bold">{item?.title}</p>
        <p className="text-[0.7rem] font-normal">
          {item.message && item?.status}
        </p>
      </span>
    </motion.div>
  );
};
