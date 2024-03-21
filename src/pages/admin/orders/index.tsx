import EditUpdateOrder from "@/components/order.tsx/EditUpdateOrder";
import { useSwr } from "@/hooks";
import AdminLayout from "@/layout/admin";
import dayjs from "dayjs";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

export default function AdminOrders() {
  const { data, mutate } = useSwr<{ data: any[] }>(`order`);
  console.log(data, "Admin order");
  const [productData, setProductData] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);

  console.log(data);
  return (
    <AdminLayout title="Orders">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Orders</div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className=" flex flex-col min-w-[55rem]">
            <div className=" grid grid-cols-10 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
              <div className="col-span-2">Name</div>
              <div className="col-span-2">Ordered Item</div>
              <div className="col-span-1 ">Price</div>
              <div className="col-span-2 ">Date</div>
              <div className="col-span-2 ">Status</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
              {data?.Orders?.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`grid grid-cols-10 gap-2 p-3 ${
                    i % 2 === 0 ? "" : "bg-primary/5 border-y"
                  }`}
                >
                  <div className="col-span-2 flex flex-col">
                    <span className="font-medium text-lg">
                      {item?.userData?.name}
                    </span>
                    <span className="font-medium text-sm text-primary-text">
                      {item?.userData?.email}
                    </span>
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <span className="font-medium text-lg">
                      {item?.product?.name}
                    </span>
                    <span className="font-medium text-sm text-primary-text">
                      {item?.product?.productCode}
                    </span>
                  </div>
                  <div className="col-span-1">
                    {item?.itemDetails?.subTotal}
                  </div>
                  <div className="col-span-2">
                    {dayjs(item?.orders?.createdAt).format("DD/MM/YYYY")}
                  </div>
                  <div className="col-span-2">
                    {item?.orders?.shippingStatus}
                  </div>
                  <div className="col-span-1">
                    <p
                      className="bg-whatsapp text-white p-1 rounded-md cursor-pointer w-fit "
                      onClick={() => {
                        setOpenDrawer(true), setProductData(item);
                      }}
                    >
                      <BsThreeDots className="text-xl" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <EditUpdateOrder
          mutate={mutate}
          productData={productData}
          setOpenDrawer={setOpenDrawer}
          openDrawer={openDrawer}
        />
      </section>
    </AdminLayout>
  );
}
