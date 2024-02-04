import { useRouter } from "next/router";

const headerData = [
  {
    id: "1",
    path: "/resources/blog",
    title: "Blog & News",
  },
  {
    id: "2",
    path: "/resources/customer-stories",
    title: "Customer Stories",
  },
  {
    id: "3",
    path: "/resources/webinar-playback",
    title: "Webinar Playback",
  },
];

const TestimonalBar = () => {
  const { asPath } = useRouter();
  const filteredData = headerData?.find((data) => data.path === asPath);
  console.log(filteredData?.title);
  return (
    <div className="top-spacing bottom-spacing main-container">
      <h1 className="title lg:text-left text-center">{filteredData?.title}</h1>
      <div className="lg:border-b my-4 border-black"></div>
    </div>
  );
};

export default TestimonalBar;
