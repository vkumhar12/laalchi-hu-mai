/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";

const AboutTeam = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    speed: 550,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
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
          arrows: false,
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
          arrows: false,
        },
      },
    ],
  };
  const aboutTeamArray = [
    {
      id: "1",
      name: "Helene Engels",
      position: "Designer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "2",
      name: "Jese Leos",
      position: "",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-7.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "3",
      name: "Joseph Mcfall",
      position: "",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "4",
      name: "Lana Byrd",
      position: "",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "5",
      name: "Michael Gough",
      position: "",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "1",
      name: "Helene Engels",
      position: "",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "2",
      name: "Jese Leos",
      position: "UI Designer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-7.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "3",
      name: "Joseph Mcfall",
      position: "Front-end Developer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "4",
      name: "Lana Byrd",
      position: "Backend Developer",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
    {
      id: "5",
      name: "Michael Gough",
      position: "Tester",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      desc: "Lots of things to learn, best opportunity to grow ourself, future oriented & prospective. Many time lots of pressure of work but that improve our efficiency. ",
    },
  ];
  return (
    <section className=" main-spacing flex flex-col gap-10 items-center bottom-spacing">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex flex-col gap-1 items-center">
          <h2 className="title">
            Closer Look at
            <span className=" text-gray-400"> Our Teams</span>
          </h2>
          <p className="h-1 w-48 bg-primary rounded-full"></p>
        </div>

        <p className="description lg:w-3/4">
          {`Taking a closer look at Our Teams reveals a versatile and dynamic collaboration platform. It offers a comprehensive set of tools for businesses and organizations to communicate, share files, and work together effectively.Teams provides a centralized hub for teams to streamline their workflow and stay connected.`}
        </p>
      </div>
      <div className="w-[80%] category-slick-slider industry-slider pt-5 ">
        <Slider {...settings}>
          {aboutTeamArray.map((item) => {
            return (
              <article
                className="mx-auto !flex items-center px-2 "
                key={item.id}
              >
                <div className=" w-full h-[20rem] rounded-xl border relative overflow-hidden group">
                  <span className=" absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white/10 to-black/90 z-[11] duration-300 group-hover:bg-opacity-60 "></span>
                  <div className=" w-full absolute bottom-3 flex justify-center flex-col items-center  z-[111]">
                    <p className=" text-2xl font-semibold text-white tracking-widest">
                      {item.name}
                    </p>
                    <p className=" text-white ">{item.position}</p>
                  </div>
                  <img
                    src={item.image}
                    className=" h-full w-full object-fill rounded-xl group-hover:scale-110 duration-300"
                    alt=""
                  />
                </div>
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default AboutTeam;
