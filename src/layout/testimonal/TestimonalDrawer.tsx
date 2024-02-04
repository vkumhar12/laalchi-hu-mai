import { useRouter } from "next/router";
import { useState } from "react";

const Blog_Data = [
  {
    id: "1",
    path: "/resources/blog",
    title: "Blog & News",
    link: "/resources/blog",
  },
  {
    id: "2",
    path: "/resources/customer-stories",
    title: "Customer Stories",
    link: "/resources/customer-stories",
  },
  {
    id: "3",
    path: "/resources/webinar-playback",
    title: "Webinar Playback",
    link: "/resources/webinar-playback",
  },
];

const TestimonalDrawer = () => {
  return (
    <aside className="w-full lg:block hidden sticky top-32">
      <div className="sticky top-32 pb-10">
        <h1 className="xl:block text-2xl p-3 sticky top-32 bg-white rounded-lg">
          Categories
        </h1>
        {Blog_Data.map((data, i) => (
          // <ul
          //   className="space-y-2 divide-y divide-gray-100 xl:divide-y-0 mt-4 xl:mt-6 xl:block block"
          //   key={i}
          // >
          //   <li className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-900">
          //     <label className=" flex justify-center items-center gap-2">
          //       <input
          //         type="checkbox"
          //         checked={isChecked}
          //         onChange={handleCheckboxChange}
          //         className=" w-4 h-4"
          //       />
          //       <Link href={data.link} className="flex gap-2 items-center">
          //         {data.title}
          //       </Link>
          //     </label>
          //   </li>
          // </ul>
          <CheckRoute data={data} key={data.id} />
        ))}
      </div>
      {/* <div className="relative">
        <input
          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="I am looking for..."
        />
        <div className="absolute right-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div> */}
    </aside>
  );
};

export default TestimonalDrawer;

const CheckRoute = ({ data }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    router.push(data?.path);
  };
  return (
    <ul className="space-y-2 divide-y divide-gray-100 xl:divide-y-0 mt-4 xl:mt-6 xl:block block">
      <li className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-900">
        {/* <Link href={data.link} className="flex gap-2 items-center"> */}
        <label className=" flex justify-center items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className=" w-4 h-4"
          />
          {data.title}
        </label>
        {/* </Link> */}
      </li>
    </ul>
  );
};
