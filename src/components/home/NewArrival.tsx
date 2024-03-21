import { productArray } from "@/locals/page.local";
import router from "next/router";
import Slider from "react-slick";
import { NewArrivalCard } from ".";
const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 250,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white">
      <main className=" main-container main-spacing pb-16 flex flex-col ">
        <article className="flex flex-col relative gap-1 items-center">
          <div className="shadow-title ">New Arrivals</div>
          <div className="w-full text-center absolute top-10 left-10 right-10 bottom-10">
            <h2 className="graph-title">---Find Out New Arrivals---</h2>
          </div>
        </article>

        <article className="w-full category-slick-slider industry-slider pt-8 lg:pt-16">
          <Slider {...settings}>
            {productArray.map((curElm: NEWARRIVALPROPS, index: number) => (
              <article
                className="mx-auto !flex items-center px-2 pb-4 cursor-pointer"
                key={curElm.id}
                onClick={() => router.push(`product`)}
              >
                <NewArrivalCard item={curElm} index={index} />
              </article>
            ))}
          </Slider>
        </article>
      </main>
    </section>
  );
};

export default NewArrivals;
