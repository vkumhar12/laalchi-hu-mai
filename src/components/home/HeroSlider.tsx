/* eslint-disable @next/next/no-img-element */
import { slides } from "@/locals/page.local";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function HeroSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjusted for slower speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsChevronCompactRight />,
    prevArrow: <BsChevronCompactLeft />,
  };

  return (
    <div className="w-full h-screen relative group">
      <Slider {...sliderSettings}>
        {slides.map((item, index) => (
          <article className="relative h-fit" key={index}>
            <img
              src={item.url}
              alt="hero-image"
              className="w-full h-[45rem] object-cover object-center"
            />
            <div className="absolute top-0 left-28 w-1/2 h-full flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-16 cursor-grab px-4 lg:px-0">
              <aside className="w-full flex flex-col items-center text-center lg:items-start lg:text-left z-10">
                <p className="text-white md:text-xl lg:text-2xl font-semibold">
                  {item.title}
                </p>

                <p className="description pb-8 font-semibold text-white">
                  {item.desc}
                </p>
                <a
                  href=""
                  className="shake2 w-fit flex items-center gap-2 bg-white text-white tracking-wide py-3 px-8 rounded-full common-transition hover:bg-white z-10"
                >
                  <HiShoppingCart className="text-2xl shake2-animation" />
                  Explore now
                </a>
              </aside>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
