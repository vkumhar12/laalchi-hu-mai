import { CustomDrawer } from "@/components/core";
import { useMutation } from "@/hooks";
import { getRandomColor } from "@/utils";
import errorHelper from "@/utils/error";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

type Props = {
  openDrawer: boolean;
  productData: any;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  mutate: () => void;
};

export default function EditUpdateOrder({
  productData,
  openDrawer,
  setOpenDrawer,
  mutate,
}: Props) {
  const shippingStatus = [
    {
      id: 0,
      value: "received",
      name: "Order Received",
    },
    {
      id: 0,
      value: "packaged",
      name: "Order Packed",
    },
    {
      id: 0,
      value: "shipped",
      name: "Order Shipped",
    },
    {
      id: 0,
      value: "OutForDelivery",
      name: "Out for Delivery",
    },
    {
      id: 0,
      value: "Delivered",
      name: "Order Delivered",
    },
  ];
  console.log(productData, "product data");
  const { mutation } = useMutation();

  const handleShippingStatus = async (value: any) => {
    try {
      console.log(productData?.orders?._id);
      // return;
      let res: ResType;

      res = await mutation(`order/change-shipping-status`, {
        method: "POST",
        isAlert: true,
        body: {
          userId: productData?.userData?._id,
          orderId: productData?.orders?._id,
          shippingStatus: value,
        },
      });
      if (res?.results?.success) {
        mutate();
      }
    } catch (error) {
      {
        errorHelper(error);
      }
    }
  };

  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[25vw] h-screen "
    >
      <section>
        <div className="graph-title underline p-5">Update Status</div>
        <div className="p-2 flex flex-col gap-5">
          <div className="admin-card flex gap-2 items-center">
            <Avatar
              className="!w-16 bg-gradient-to-b  !text-2xl !uppercase !h-16 !border-2 !rounded-full"
              src=""
              style={{ backgroundColor: getRandomColor(1.5) }}
            >
              {productData?.userData?.name[0]}
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium text-xl">
                {productData?.userData?.name}
              </p>
              <p className="font-medium text-sm ">
                {productData?.userData?.email}
              </p>
            </div>
          </div>
          <div className="admin-card flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Product Details</h1>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Name :</p>
              <p className=" font-medium">{productData?.product?.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Product Code :</p>
              <p className=" font-medium">
                {productData?.product?.productCode}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Product Color :</p>
              <p className=" font-medium">{productData?.product?.color}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Sellin Price :</p>
              <p className=" font-medium">
                ₹{productData?.product?.sellingPrice}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Ordered Quantity:</p>
              <p className=" font-medium">
                {productData?.itemDetails?.quantity}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Ordered Date :</p>
              <p className=" font-medium">
                {dayjs(productData?.orders?.createdAt).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Payment Type :</p>
              <p className=" font-medium">
                {productData?.orders?.paymentType === "cod"
                  ? "Cash On Delivery"
                  : "Online Payment"}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium text-primary-text">Total :</p>
              <p className=" font-medium">
                ₹{productData?.itemDetails?.subTotal}
              </p>
            </div>
            <div className="w-full">
              <select
                name=""
                id=""
                className="w-full p-2 rounded-md shadow-2xl cursor-pointer"
                onChange={(e) => handleShippingStatus(e.target.value)}
              >
                {/* <option
                  value="received"
                  onClick={() => {}}
                  // try {
                  //   let res: ResType;
                  //   const formData = new FormData();

                  //   res = await mutation(`order/change-shipping-status`, {
                  //     method: "POST",
                  //     isAlert: true,
                  //     body: {
                  //       orderId: productData?.orders?._id,
                  //       shippingStatus: value,
                  //     },
                  //   });
                  //   if (res?.results?.success) {
                  //     mutate();
                  //   }
                  // } catch (error) {
                  //   {
                  //     errorHelper(error);
                  //   }
                  // }
                >
                  Order Received
                </option> */}
                {shippingStatus?.map((item) => (
                  <option
                    value={item?.value}
                    key={item?.id}
                    // onClick={() => handleShippingStatus(item?.value)}
                  >
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
    </CustomDrawer>
  );
}
