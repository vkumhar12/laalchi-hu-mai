import { featureProducts } from "@/locals/page.local";
import { useState } from "react";
import { ProductCard } from "../all-category";

export default function Category() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (id: number) => {
    setActiveIndex(id);
  };
  let data;
  switch (activeIndex) {
    case 0:
      data = <ProductCard />;
      break;
    case 1:
      data = <ProductCard />;
      break;
    case 2:
      data = <ProductCard />;
      break;
    case 3:
      data = <ProductCard />;
      break;
    case 4:
      data = <ProductCard />;
      break;
    case 5:
      data = <ProductCard />;
      break;
    default:
      data = <ProductCard />;
  }
  return (
    <section className="">
      <div className="w-full flex flex-col gap-4">
        <div className="relative">
          <h1 className="text-8xl tracking-widest text-gray-200 font-semibold">
            FEATURE
          </h1>
          <h1 className="graph-title absolute bottom-8 left-2 ">
            -FEATURES PRODUCTS
          </h1>
        </div>
        <div className="flex justify-end admin-gap items-end overflow-x-scroll">
          {featureProducts?.map((item, index) => {
            return (
              <p
                onClick={() => handleClick(index)}
                key={item.id}
                className={`md:px-4 md:py-2 rounded-md  cursor-pointer  font-semibold common-transition ${
                  activeIndex === index ? item.nameColor : "text-primary-text"
                }`}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col admin-gap">
          {/* <p className=" border-b w-full"></p> */}
          <hr />
          <div>{data}</div>
        </div>
      </div>
    </section>
  );
}
