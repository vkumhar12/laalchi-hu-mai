/* eslint-disable @next/next/no-img-element */
import { EditProductDrawer } from "@/components";
import { useMutation, useSwr } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import AdminLayout from "@/layout/admin";
import { sweetAlertCustomStyles, sweetAlertStyles } from "@/utils";
import errorHelper from "@/utils/error";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageProducts() {
  const { data, mutate } = useSwr<{
    data: any[];
  }>(`product?sortBy=ascending`);
  // console.log(data?.data, "All Products");

  const { user } = useAuth();
  console.log(user, "User Data");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [productData, setProductData] = useState();
  const { mutation } = useMutation();

  const handleDeleteProduct = (id: string) => {
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
          const res = await mutation(`product/${id}`, {
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
    <AdminLayout title="Manage Products">
      <>
        <section className="flex flex-col admin-gap pt-14 pb-14">
          <div className="flex justify-between">
            <div className="graph-title">Manage Products</div>
            <div className="bg-primary flex gap-1 items-center px-3 py-2 text-lg font-medium rounded-md text-white">
              <p>
                <IoMdAdd className="text-2xl" />
              </p>
              <span>Add Product</span>
            </div>
          </div>
          <div className="max-w-full overflow-x-scroll scroll-bar-none">
            <div className=" flex flex-col min-w-[55rem]">
              <div className=" grid grid-cols-12 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
                <div className="col-span-1">Product Photo</div>
                <div className="col-span-2">Product Name</div>
                <div className="col-span-2 ">Product Code</div>
                <div className="col-span-1">MRP</div>
                <div className="col-span-1">Selling Price</div>
                <div className="col-span-1 text-center">Quality</div>
                <div className="col-span-3 text-center">
                  Product Description
                </div>
                <div className="col-span-1">Actions</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
                {data?.data?.map((data, i) => (
                  <div
                    key={i}
                    className={`grid items-center grid-cols-12 h-20 p-3 ${
                      i % 2 === 0 ? "" : "bg-primary/5 border-y"
                    }`}
                  >
                    <img
                      src={data?.productPhoto}
                      alt={data?.productPhoto}
                      className="w-14 h-14 border-2 p-1 col-span-1"
                    />
                    <div className="col-span-2">{data?.name}</div>
                    <div className="col-span-2">{data?.productCode}</div>
                    <div className="col-span-1">₹{data?.mrp}</div>
                    <div className="col-span-1 pl-3">₹{data?.sellingPrice}</div>
                    <div className="col-span-1 text-center">
                      {data?.quality}
                    </div>
                    <div className="col-span-3 line-clamp-2 text-center text-sm">
                      {data?.desc}
                    </div>
                    <div className="col-span-1 flex gap-1">
                      <div
                        className="p-2 rounded-md bg-whatsapp/10 text-whatsapp cursor-pointer"
                        onClick={() => {
                          setOpenDrawer(true), setProductData(data);
                        }}
                      >
                        <CiEdit />
                      </div>
                      <p
                        className="p-2 rounded-md bg-pinterest/10 text-pinterest cursor-pointer"
                        onClick={() => handleDeleteProduct(data?._id)}
                      >
                        <MdDeleteOutline />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <EditProductDrawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          productData={productData}
          mutate={mutate}
        />
      </>
    </AdminLayout>
  );
}
