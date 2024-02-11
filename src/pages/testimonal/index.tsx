/* eslint-disable @next/next/no-img-element */
import { TestimonalMainPage } from "@/components/testimonal-main";
import Layout from "@/layout/public";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";

export default function Testimonal() {
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
          <TestimonalMainPage />
          <Slider {...sliderSettings}>
            {testimontalArray?.map((data, i) => (
              <section className="bg-gray-50 dark:bg-gray-800 mt-20" key={i}>
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                  <figure className="">
                    <div className="flex justify-center">
                      <img src="/quote.png" alt="" className="w-20 h-20" />
                    </div>
                    <div>
                      <blockquote>
                        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                          {data?.testimonial}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile picture"
                        />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">
                            {data?.name}
                          </div>
                          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                            CEO at Google
                          </div>
                        </div>
                      </figcaption>
                    </div>
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
