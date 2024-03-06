/* eslint-disable @next/next/no-img-element */
import AdminLayout from "@/layout/admin";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function AddProducts() {
  const contactArray = [
    {
      name: "",
      email: "",
      desc: "",
    },
    {
      name: "",
      email: "",
      desc: "",
    },
  ];
  return (
    <AdminLayout title="Contacts">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Contacts Page is on going</div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className=" flex flex-col min-w-[55rem]">
            <div className=" grid grid-cols-8 text-sm font-semibold px-5 py-3 bg-secondary/70 text-white shadow-lg rounded-t-md">
              <div className="col-span-2">Customer Name</div>
              <div className="col-span-2">Customer email</div>
              <div className="col-span-2">Description</div>
              <div className="col-span-2">Actions</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md ">
              {contactArray?.map((data, i) => (
                <div
                  key={i}
                  className={`grid items-center grid-cols-8 h-20 p-3 ${
                    i % 2 === 0 ? "" : "bg-primary/5 border-y"
                  }`}
                >
                  <div className="col-span-2">{data?.name}</div>
                  <div className="col-span-2">{data?.email}</div>
                  <div className="col-span-2">{data?.desc}</div>

                  <div className="col-span-2 flex gap-1">
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
