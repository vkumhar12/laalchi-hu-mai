/* eslint-disable @next/next/no-img-element */
import EditTestimonalDrawer from "@/components/testimonal-main/EditTestimonal";
import { useMutation, useSwr } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import AdminLayout from "@/layout/admin";
import { sweetAlertCustomStyles, sweetAlertStyles } from "@/utils";
import errorHelper from "@/utils/error";
import dayjs from "dayjs";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageTestimonal() {
  const testimonalArray = [
    {
      photo: "",
      customerName: "",
      productNameCategory: "",
      date: "",
      testimonialContent: "",
    },
    {
      photo: "",
      customerName: "",
      productNameCategory: "",
      date: "",
      testimonialContent: "",
    },
  ];
  const { user } = useAuth();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [testData, setTestData] = useState();
  // console.log(user, "User Data");
  const { data, mutate } = useSwr<{
    data: any[];
  }>(`testimonial`);
  console.log(data, "Data");
  const { mutation } = useMutation();
  const handleDeleteTestimonal = (id: string) => {
    try {
      Swal.fire({
        title: "Warning..!",
        text: "Are you sure you want to delete the Testimonal?",
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
          const res = await mutation(`testimonial/${id}`, {
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
    <AdminLayout title="Testimonal">
      <>
        <section className="flex flex-col admin-gap pt-5">
          <div className="graph-title">Manage Testimonal</div>
          <div className="max-w-full overflow-x-scroll scroll-bar-none">
            <div className=" flex flex-col min-w-[55rem]">
              <div className=" grid grid-cols-10 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
                <div className="col-span-2">Title</div>
                <div className="col-span-2">Rating</div>
                <div className="col-span-1 ">Date</div>
                <div className="col-span-3 text-center">
                  Testimonial Content
                </div>
                <div className="col-span-1">Actions</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
                {data?.data?.map((data, i) => (
                  <div
                    key={i}
                    className={`grid items-center grid-cols-10 h-20 p-3 ${
                      i % 2 === 0 ? "" : "bg-primary/5 border-y"
                    }`}
                  >
                    <div className="col-span-2">{data?.title}</div>
                    <div className="col-span-2">{data?.rating}</div>
                    <div className="col-span-1">
                      {dayjs(data?.createdAt).format("YYYY-MM-DD")}
                    </div>
                    <div className="col-span-3 pl-3 text-center">
                      {data?.description}
                    </div>

                    <div className="col-span-1 flex gap-1">
                      <div
                        className="p-2 rounded-md bg-whatsapp/10 text-whatsapp cursor-pointer"
                        onClick={() => {
                          setOpenDrawer(true), setTestData(data);
                        }}
                      >
                        <CiEdit />
                      </div>
                      <p
                        className="p-2 rounded-md bg-pinterest/10 text-pinterest cursor-pointer"
                        onClick={() => handleDeleteTestimonal(data?._id)}
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
        <EditTestimonalDrawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          testData={testData}
          mutate={mutate}
        />
      </>
    </AdminLayout>
  );
}
