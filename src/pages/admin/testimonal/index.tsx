/* eslint-disable @next/next/no-img-element */
import AdminLayout from "@/layout/admin";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function AddProducts() {
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
  return (
    <AdminLayout title="Testimonal">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Manage Testimonal</div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className=" flex flex-col min-w-[55rem]">
            <div className=" grid grid-cols-10 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
              <div className="col-span-2">Customer Image</div>
              <div className="col-span-1">Customer Name</div>
              <div className="col-span-2">Product Name</div>
              <div className="col-span-1 ">Date</div>
              <div className="col-span-3 text-center">Testimonial Content</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
              {testimonalArray?.map((data, i) => (
                <div
                  key={i}
                  className={`grid items-center grid-cols-10 h-20 p-3 ${
                    i % 2 === 0 ? "" : "bg-primary/5 border-y"
                  }`}
                >
                  <img
                    src={data?.photo}
                    alt={data?.photo}
                    className="w-14 h-14 border-2 p-1 col-span-2"
                  />
                  <div className="col-span-1">{data?.customerName}</div>
                  <div className="col-span-2">{data?.productNameCategory}</div>
                  <div className="col-span-1">{data?.date}</div>
                  <div className="col-span-3 pl-3">
                    {data?.testimonialContent}
                  </div>

                  <div className="col-span-1 flex gap-1">
                    <div
                      className="p-2 rounded-md bg-whatsapp/10 text-whatsapp cursor-pointer"
                      // onClick={() => setOpenDrawer(true)}
                    >
                      <CiEdit />
                    </div>
                    <p
                      className="p-2 rounded-md bg-pinterest/10 text-pinterest cursor-pointer"
                      // onClick={handleDelete}
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
    </AdminLayout>
  );
}
