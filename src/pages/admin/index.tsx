import AdminLayout from "@/layout/admin";
import dynamic from "next/dynamic";
import { BsBagHeart } from "react-icons/bs";
import { HiOutlineShoppingBag, HiOutlineUserGroup } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";

export default function DashBoard() {
  const DynamicApexChart = dynamic(
    () => import("../../components/graph/ColumnChart"),
    {
      loading: () => <p>Loading chart...</p>,
      ssr: false, // Prevent rendering on the server side
    }
  );
  const PieApexChart = dynamic(
    () => import("../../components/graph/PieChart"),
    {
      loading: () => <p>Loading chart...</p>,
      ssr: false, // Prevent rendering on the server side
    }
  );
  const chartData = {
    series: [18, 14, 22, 15, 23, 13, 45, 16, 23, 34, 21],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
  };
  const pieData = [
    { category: "Formal Boots", value: 20 },
    { category: "Sneakers", value: 20 },
    { category: "Sport Shoes", value: 10 },
    { category: "Baseketball Shoes", value: 10 },
  ];
  return (
    <AdminLayout>
      <section className="px-2 py-4 flex flex-col admin-gap">
        <article className="grid md:grid-cols-4 grid-cols-1 gap-4 ">
          {[
            {
              label: "Total Products",
              value: "800+",
              icon: <HiOutlineShoppingBag className="text-5xl text-white" />,
              bgColor: "from-amber-200 to-yellow-500",
            },

            {
              label: "Total Revenue",
              value: "70+",
              icon: <TbReportSearch className="text-5xl text-white" />,
              bgColor: "from-orange-400 to-amber-500",
            },
            {
              label: "Total Sales",
              value: "500+",
              icon: <HiOutlineUserGroup className="text-5xl text-white" />,
              bgColor: "from-green-500 to-emerald-600",
            },

            {
              label: "Total Happy Customers",
              value: "400+",
              icon: <BsBagHeart className="text-5xl text-white" />,
              bgColor: "from-violet-400 to-purple-500",
            },
          ].map((data, index) => (
            <div
              key={index}
              className={`p-3 h-[6rem] bg-white rounded-lg shadow-[0px_0px_8px_1px_#00000024] w-full flex justify-between items-center`}
            >
              <span>
                <p className="font-extrabold text-xl font-sub text-primary">
                  {data.value}
                </p>
                <p className="font-sub font-semibold text-gray-600">
                  {data.label}
                </p>
              </span>
              <p
                className={`w-16 h-16 bg-gradient-to-r ${data.bgColor} rounded-full p-4`}
              >
                <span className="w-full h-full flex justify-center items-center">
                  {data.icon}
                </span>
              </p>
            </div>
          ))}
        </article>
        <article className="flex gap-6">
          <div className="w-1/2">
            <div className=" rounded-lg bg-white p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h1 className=" text-2xl font-medium text-primary">
                Monthly Revenue
              </h1>
              <DynamicApexChart
                series={chartData.series}
                categories={chartData.categories}
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className=" rounded-lg bg-white p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h1 className=" text-2xl font-medium text-primary">
                All Categories
              </h1>
              <></>
              <PieApexChart chartData={pieData} />
            </div>
          </div>
        </article>
      </section>
    </AdminLayout>
  );
}
