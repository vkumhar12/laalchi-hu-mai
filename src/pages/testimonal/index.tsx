/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { TestimonalMainPage } from "@/components/testimonal-main";
import { useSwr } from "@/hooks";
import Layout from "@/layout/public";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";
import { renderStars } from "../[product-page]";

export default function Testimonal() {
  const { data } = useSwr<{ data: any[] }>(`testimonial`);
  console.log(data?.data);
  const testimontalArray = [
    {
      name: "Sarah M.",
      testimonial:
        "I've been a loyal customer for years, and every pair of shoes I've bought from this website has exceeded my expectations. The quality, comfort, and style are unmatched!",
    },
    {
      name: "John D.",
      testimonial:
        "As a fitness enthusiast, I need shoes that can keep up with my active lifestyle. These shoes not only look great but also provide the support and durability I need for my workouts. Highly recommend!",
    },
    {
      name: "Emily L.",
      testimonial:
        "I've struggled with foot pain for years until I found these shoes. The arch support and cushioning are fantastic, and I can now walk and stand for hours without any discomfort. Thank you!",
    },
    {
      name: "David S.",
      testimonial:
        "I'm a fashion-forward individual, and finding stylish yet comfortable shoes can be challenging. But this website offers a wide range of trendy options that don't compromise on comfort. Love my new kicks!",
    },
    {
      name: "Lisa K.",
      testimonial:
        "I recently purchased a pair of shoes for an upcoming hiking trip, and I couldn't be happier with my choice. They're sturdy, waterproof, and provide excellent traction on rough terrain. Can't wait to hit the trails!",
    },
    {
      name: "Michael P.",
      testimonial:
        "These shoes are perfect for everyday wear. Whether I'm running errands or meeting friends for coffee, they offer the perfect blend of style and comfort. Plus, they're so versatile and go with everything in my wardrobe!",
    },
    {
      name: "Jessica H.",
      testimonial:
        "I'm on my feet all day for work, so comfortable shoes are a must. These shoes provide the support I need without sacrificing style. My feet are happy, and so am I!",
    },
    {
      name: "Ryan T.",
      testimonial:
        "I've received so many compliments on my new shoes! Not only do they look amazing, but they're also incredibly well-made. It's clear that attention to detail and quality craftsmanship went into their design.",
    },
    {
      name: "Michelle G.",
      testimonial:
        "I have wide feet, so finding shoes that fit comfortably can be challenging. But these shoes offer a wide range of sizes, including wide widths, ensuring a perfect fit every time. I'm thrilled with my purchase!",
    },
    {
      name: "Alex R.",
      testimonial:
        "These shoes are a game-changer for my workouts. The lightweight design and responsive cushioning help me achieve my fitness goals with ease. I feel like I'm walking on clouds!",
    },
  ];
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
    <Layout title="Testimonal">
      <section className="main-container flex flex-col admin-gap pt-10 bottom-spacing">
        <div className="flex justify-between items-center">
          <div className="graph-title">Testimonals</div>
          <div className="flex items-center">
            <Link href="/">
              <p className="text-primary-text font-medium cursor-pointer">
                Home/
              </p>
            </Link>
            <p className="cursor-not-allowed text-gray-400">Testimonal</p>
          </div>
        </div>
        <div className="">
          <TestimonalMainPage />

          <Slider {...sliderSettings}>
            {data?.data?.map((data, i) => (
              <section className="bg-gray-50 dark:bg-gray-800 mt-20 main-container">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <blockquote>
                      <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                        "{data?.description}"
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      {/* <img
                        className="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      > */}
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          {data?.title}
                        </div>
                        <div className="pl-3 flex">
                          {renderStars(data?.rating)}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            ))}
          </Slider>
        </div>
      </section>
    </Layout>
  );
}
