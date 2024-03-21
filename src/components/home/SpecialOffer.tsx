/* eslint-disable @next/next/no-img-element */
import { useSwr } from "@/hooks";
import { speacialOfferArray } from "@/locals/page.local";
import { motion } from "framer-motion";
import router from "next/router";
import Slider from "react-slick";

const SpecialOffer = () => {
  const { data } = useSwr<{ data: any[] }>(`product`);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1360,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 760,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrow: true,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 0,
        },
      },
    ],
  };
  return (
    <section className="bg-white z-40">
      <main className=" main-container main-spacing flex flex-col gap-10 pb-10">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center relative ">
            <div className="shadow-title ">Special Offer</div>
            <h2 className="graph-title absolute top-10 bottom-10 right-10 left-10">
              ---Our Hottest Special Offers---
            </h2>
          </div>
        </article>
        <article className="w-full">
          <Slider {...settings}>
            {speacialOfferArray?.map((item, index) => {
              return (
                <article
                  className="mx-auto !flex items-center px-2.5 pb-4 hover:cursor-pointer"
                  key={item.id}
                  onClick={() => router.push(`/product`)}
                >
                  <motion.div
                    key={item.id}
                    className=" w-full h-full relative rounded-lg group overflow-hidden"
                  >
                    <span className=" absolute w-full h-full top-0 left-0 group-hover:bg-black duration-300 group-hover:bg-opacity-60 rounded-lg z-[10]"></span>

                    <a
                      href=""
                      className=" absolute  group-hover:flex hidden w-full top-1/2 justify-center z-20 font-semibold text-white text-xl tracking-widest hover:text-primary "
                    >
                      Learn More
                    </a>

                    <img
                      src={item.image}
                      className=" w-full h-full object-contain rounded-lg"
                      alt=""
                    />
                  </motion.div>
                </article>
              );
            })}
          </Slider>
        </article>
      </main>
    </section>
  );
};

export default SpecialOffer;
