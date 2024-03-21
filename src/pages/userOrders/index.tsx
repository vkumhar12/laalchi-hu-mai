import { useMutation, useSwr } from "@/hooks";
import Layout from "@/layout/public";
import { sweetAlertCustomStyles, sweetAlertStyles } from "@/utils";
import errorHelper from "@/utils/error";
import dayjs from "dayjs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function UserOrders() {
  const { data, mutate } = useSwr<{ data: any[] }>(`order/my-orders`);
  // console.log(data.Orders[0]?.OrderDetails.item[0].productDetails.name);
  // console.log(data?.Orders);
  const { mutation } = useMutation();
  const handleCancelOrder = (id: string) => {
    try {
      Swal.fire({
        title: "Warning..!",
        text: "Do you want to cancel order?",
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
          const res = await mutation(`order/${id}`, {
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
  return (
    <Layout title="Order History">
      <section className="flex flex-col admin-gap pt-5 main-container top-spacing bottom-spacing bg-slate-100">
        <div className="graph-title">Orders</div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none h-[45rem]">
          <div className=" flex flex-col min-w-[55rem]">
            <div className=" grid grid-cols-12 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
              <div className="col-span-2">Ordered Item</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Payment Type</div>
              <div className="col-span-3 text-center">Date</div>
              <div className="col-span-1 ">Order Status</div>
              <div className="col-span-1 text-center">Action</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
              {data?.Orders?.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`grid items-center grid-cols-12 h-20 p-3 ${
                    i % 2 === 0 ? "" : "bg-primary/5 border-y"
                  }`}
                >
                  <div className="col-span-2">
                    {item?.OrderDetails?.item[0]?.productDetails?.name}
                  </div>
                  <div className="col-span-1">
                    ₹{item?.OrderDetails?.item[0]?.productDetails?.sellingPrice}
                  </div>
                  <div className="col-span-2 text-center">
                    {item?.OrderDetails?.shippingStatus === "received" ? (
                      <p className="p-2 text-pink-blue bg-pink-blue/10 rounded-md">
                        Order Received
                      </p>
                    ) : item?.OrderDetails?.shippingStatus === "packaged" ? (
                      <p className="p-2 text-instagram bg-instagram/10 rounded-md">
                        Order Packed
                      </p>
                    ) : item?.OrderDetails?.shippingStatus === "shipped" ? (
                      <p className="p-2 text-lime-600 bg-lime-100 rounded-md">
                        Order Shipped
                      </p>
                    ) : item?.OrderDetails?.shippingStatus ===
                      "OurForDelivery" ? (
                      <p className="p-2 text-secondary bg-secondary/10 rounded-md">
                        Out for Delivery
                      </p>
                    ) : (
                      <p className="p-2 text-whatsapp bg-whatsapp/10 rounded-md">
                        Order Delivered
                      </p>
                    )}
                  </div>
                  <div className="col-span-2 text-center">
                    {item?.OrderDetails?.paymentType === "cod"
                      ? "Cash On Delivery"
                      : ""}
                  </div>
                  <div className="col-span-3 text-center">
                    {dayjs(item?.OrderDetails?.createdAt).format("DD/MM/YYYY")}
                  </div>
                  <div className="col-span-1">
                    {item?.OrderDetails?.status === "cancelled" ? (
                      <div className="text-pinterest whitespace-nowrap">
                        Order Cancelled
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {item?.OrderDetails?.status === "cancelled" ? (
                    <div className="col-span-1 flex items-center justify-center">
                      <p className=" cursor-not-allowed p-1 bg-pinterest/50 text-white rounded">
                        <MdOutlineDeleteOutline
                          className="text-xl"
                          onClick={() =>
                            handleCancelOrder(item?.OrderDetails?._id)
                          }
                        />
                      </p>
                    </div>
                  ) : (
                    <div className="col-span-1 flex items-center justify-center">
                      <p className=" cursor-pointer p-1 bg-pinterest text-white rounded">
                        <MdOutlineDeleteOutline
                          className="text-xl"
                          onClick={() =>
                            handleCancelOrder(item?.OrderDetails?._id)
                          }
                        />
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
