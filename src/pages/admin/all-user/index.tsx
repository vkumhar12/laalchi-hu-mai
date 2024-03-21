/* eslint-disable react-hooks/rules-of-hooks */
import { useSwr } from "@/hooks";
import AdminLayout from "@/layout/admin";
import { getRandomColor } from "@/utils";
import { Avatar } from "@mui/material";

export default function index() {
  const { data } = useSwr<{
    data: any[];
  }>(`users`);
  console.log(data?.data);

  return (
    <AdminLayout>
      <div className="flex flex-col admin-gap pt-5">
        <h1 className="graph-title ">All Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 admin-gap">
          {data?.data?.map((item, i) => (
            <div className="admin-card flex gap-2 items-center" key={i}>
              <Avatar
                className="!w-16 bg-gradient-to-b  !text-2xl !uppercase !h-16 !border-2 !rounded-full"
                src=""
                style={{ backgroundColor: getRandomColor(1.5) }}
              >
                {item?.name[0]}
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium text-pink-blue">{item?.name}</p>
                <hr />
                <p className="font-medium text-sm text-primary-text">
                  {item?.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
