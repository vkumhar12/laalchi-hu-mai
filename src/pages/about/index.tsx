import { AboutCompany, AboutHero, AboutTeam } from "@/components/about-us";
import Layout from "@/layout/public";
import { Fragment } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 250,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: true,
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
    <Layout title={`About Us | PrintBrix`}>
      <div className="main-container">
        <AboutHero />
        <AboutCompany />
      </div>
      {/* <KeyFeature /> */}
      {/* <UserTestimonial
        title={
          <h2 className="title text-center">
            Happy Customers, <span className=" text-gray-400">Happy Us</span>
          </h2>
        }
      /> */}
      <AboutTeam />
    </Layout>
  );
};
export default AboutUs;

const UserTestimonial = ({
  title = (
    <h2 className="title text-center">
      Words from Our <span className=" text-gray-400">Happy Clients</span>
    </h2>
  ),
}: {
  title: JSX.Element;
}) => {
  const TESTIMONIAL_ARR = [
    {
      _id: "1",
      image: "/home/profile.jpg",
      name: "Rinky Sahoo",
      rating: 5,
      quote:
        "I'm deeply thankful for the exquisite personalized pen stand you made. It's become the centerpiece of my workspace, a daily reminder of your thoughtfulness and the care that went into crafting it. Your unique gift brings joy and functionality to my day, and I cherish it greatly.",
    },
    {
      _id: "2",
      image: "/home/profile.jpg",
      name: "S S",
      rating: 5,
      quote:
        "Exceptional and efficient service. I had my Flex, LED name board, Leaflet, and Visiting Cards all produced here. The staff was incredibly courteous and helpful. I highly recommend them and will return for future projects. Keep up the fantastic work!.",
    },
    {
      _id: "3",
      image: "/home/profile.jpg",
      name: "Ayesha Khan",
      rating: 5,
      quote:
        "This shop is the ultimate destination for LED boards and neon signs. The staff members are exceptionally friendly and cooperative, making the entire experience a breeze. Without a doubt, the best choice for all your signage needs, backed by top-notch customer service.",
    },
    {
      _id: "4",
      image: "/home/profile.jpg",
      name: "Manzar Alam",
      rating: 5,
      quote:
        "An excellent destination with top-notch service and a team of skilled professionals. This place is highly recommended for anyone seeking quality and professionalism in their service experience.",
    },
    {
      _id: "5",
      image: "/home/profile.jpg",
      name: "Shiv Sambhu Art",
      rating: 5,
      quote:
        "The go-to place for all your LED letter board needs. The staff here is not only skilled but also exceptionally polite and customer-focused. A perfect combination of quality products and outstanding service.",
    },
    {
      _id: "6",
      image: "/home/profile.jpg",
      name: "Sumit Rout",
      rating: 5,
      quote:
        "The order arrived promptly, which was impressive. However, for larger orders, it would be beneficial to have them packaged securely. This would ensure that items are well-protected during transit and maintain the quality and condition of the products upon delivery.",
    },
    {
      _id: "7",
      image: "/home/profile.jpg",
      name: "Bikash Kumar",
      rating: 5,
      quote:
        "In Bhubaneswar, this place stands out for its remarkable work and affordable pricing. Their commitment to excellence is evident in their top-notch finishing work. If you're looking for quality and affordability, this is the place to go for all your needs.",
    },
    {
      _id: "8",
      image: "/home/profile.jpg",
      name: "Anil Swain",
      rating: 5,
      quote:
        "This is the go-to place for crafting LED signboards. Their expertise and service make it a reliable choice for anyone seeking high-quality signage solutions. Your signage needs find a perfect home here.",
    },
    {
      _id: "9",
      image: "/home/profile.jpg",
      name: "Nilufar Nur",
      rating: 5,
      quote:
        "This place boasts exceptional design skills and brilliant graphic artistry. They offer a wide range of sticker designs and art styles, making it a versatile choice for all your creative needs.",
    },
    {
      _id: "10",
      image: "/home/profile.jpg",
      name: "Erfan Khan",
      rating: 5,
      quote:
        "Exceptional work done by highly skilled professionals. Their precision and expertise shine through in every project they undertake. Truly impressive.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <section
      id="client-testimonial"
      className="main-container main-spacing flex flex-col items-center"
    >
      <div className="flex flex-col gap-1 items-center">
        {title}
        <p className="h-1 w-48 bg-primary rounded-full"></p>
      </div>
      <aside className="w-full lg:w-3/4 2xl:w-3/5 pt-8 lg:pt-16">
        <Slider {...settings} className="">
          {TESTIMONIAL_ARR.map((item) => (
            <div
              className="!flex !items-center px-2 md:px-20 pt-20 pb-10"
              key={item._id}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </Slider>
      </aside>
    </section>
  );
};

const TestimonialCard = ({ item }: { item: any }) => {
  return (
    <article className="relative w-full flex flex-col items-center lg:flex-row bg-white shadow-[0px_2px_10px_3px_#edf2f7]">
      <div className="relative cursor-pointer rounded h-40 w-40 lg:w-48 lg:h-48 min-w-[10rem] lg:min-w-[12rem] flex flex-col items-start bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] -mt-16 lg:-mt-0 lg:-translate-y-16 lg:-translate-x-16">
        {/* <img
            src={item.image}
            alt="client-picture"
            className="object-cover h-40 w-40 lg:w-60 lg:h-60"
          /> */}
        <span className=" w-full h-full flex items-center justify-center text-7xl text-white font-semibold">
          {item.name.length > 1 ? item.name.slice(0, 1) + "" : item.name}
        </span>
      </div>

      <div className="relative w-full pl-4 pr-4 md:pl-8 md:pr-8 py-8 lg:pl-0">
        <p className="text-sm lg:text-base description text-gray-600">
          {item.quote.length > 235
            ? item.quote.slice(0, 236) + "..."
            : item.quote}
        </p>
        <h4 className="text-sm lg:text-base capitalize font-semibold tracking-wide text-gray-800 pt-4 pb-1">
          {item.name}
        </h4>
        <h4 className="text-sm lg:text-base capitalize tracking-wide text-gray-800 pb-1">
          Customer
        </h4>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, index) => (
            <Fragment key={index}>
              {item?.rating >= index + 1 ? (
                <AiFillStar className="text-amber-400 text-sm" />
              ) : (
                <AiOutlineStar className="text-amber-400 text-sm" />
              )}
            </Fragment>
          ))}
        </div>
        <span className="absolute top-0 left-0 lg:-top-6 lg:-left-6">
          <RiDoubleQuotesL className="text-3xl md:text-5xl text-primary" />
        </span>
        <span className="absolute bottom-0 lg:-bottom-6 right-0">
          <RiDoubleQuotesL className="text-3xl md:text-5xl text-primary rotate-180" />
        </span>
      </div>
    </article>
  );
};
