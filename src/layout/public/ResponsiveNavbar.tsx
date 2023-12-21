/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
// import { NAVBAR_OPTIONS_ARRAY } from "./Navbar";
import { BiChevronDown } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import { BsPerson } from "react-icons/bs";
// import { AiOutlineSetting } from "react-icons/ai";
// import { FaSearch } from "react-icons/fa";
import Search from "@/components/home/Search";
import Link from "next/link";
// import { Search } from "@/components/search";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

type ResponsiveNavType = {
  listName: string;
  isRes: string;
  link: string;
  optionList?: {
    title?: string;
    data: {
      title: string;
      link: string;
      icon: string;
    }[];
  }[];
};

export const NAVBAR_OPTIONS_ARRAY: ResponsiveNavType[] = [
  {
    listName: "Solutions",
    isRes: "yes",
    link: "",
    optionList: [
      {
        data: [
          {
            title: "Business",
            link: "/solutions/business",
            icon: "/icon-1.svg",
          },
          {
            title: "Government",
            link: "/solutions/government",
            icon: "/icon-2.svg",
          },
          {
            title: "Academic Institution",
            link: "/solutions/academic-institutions",
            icon: "/icon-3.svg",
          },
        ],
      },
    ],
  },

  {
    listName: "Features",
    isRes: "yes",
    link: "",
    optionList: [
      {
        data: [
          {
            title: "Easy upload and preservation",
            link: "/features/easy-upload",
            icon: "/easy-upload.svg",
          },
          {
            title: "Secure cloud storage",
            link: "/features/secure-cloud-storage",
            icon: "/icon-2.svg",
          },
          {
            title: "Active Digital Preservation",
            link: "/features/active-digital-preservation",
            icon: "/active-preservation.svg",
          },

          {
            title: "Catalog Integration",
            link: "/features/catalog-integration",
            icon: "/catalog.svg",
          },

          {
            title: "Manage content & metadata",
            link: "/features/manage-content",
            icon: "/metadata.svg",
          },
          {
            icon: "/m365.svg",
            title: "Seamless preservation for Microsoft 365",
            link: "/features/seamless-preservation",
          },
          {
            icon: "/access.svg",
            title: "Access and Discovery",
            link: "/features/access-discovery",
          },
          {
            icon: "/developers.svg",
            title: "Integrate &  extend with APIs",
            link: "/features/integrate-extend-api",
          },
        ],
      },
    ],
  },

  {
    listName: "Resources",
    isRes: "yes",
    link: "",
    optionList: [
      {
        title: "LEARN",
        data: [
          {
            icon: "/news.svg",
            title: "Blogs and News",
            link: "/resources/blog",
          },
          {
            icon: "/events.svg",
            title: "Events and Webinars",
            link: "/resources/webinar-playback",
          },
          {
            icon: "/customers.svg",
            title: "Customer stories",
            link: "/resources/customer-stories",
          },
          {
            icon: "/accesss.svg",
            title: "Access & Discovery showcase",
            link: "/resources/access",
          },
          {
            icon: "/preservation.svg",
            title: "Digital Preservation 101",
            link: "/resources/digital-preservation",
          },
        ],
      },
      {
        title: "CONNECT",
        data: [
          {
            icon: "/icon-1.svg",
            title: "Community Hub",
            link: "/resources",
          },
          {
            icon: "/icon-2.svg",
            title: "Support",
            link: "/resources/support",
          },
          {
            icon: "/icon-3.svg",
            title: "Developers",
            link: "/resources",
          },
          {
            icon: "/icon-1.svg",
            title: "Service desk login",
            link: "/resources/login",
          },
          {
            icon: "/partners.svg",
            title: "Partners",
            link: "/resources/partners",
          },
        ],
      },
    ],
  },
  {
    listName: "About",
    isRes: "no",
    link: "",
    optionList: [
      {
        data: [
          {
            icon: "/about.svg",
            title: "About Preservica",
            link: "/about/about",
          },
          {
            icon: "/Careers.svg",
            title: "Careers",
            link: "/about/carrers",
          },
          {
            icon: "/Management-Team.svg",
            title: "Management Team",
            link: "/about/team",
          },

          {
            icon: "/Trust-Center.svg",
            title: "Trust Center",
            link: "/about/trust",
          },

          {
            icon: "/Sustainability.svg",
            title: "Sustainability",
            link: "/about/sustainability",
          },
          {
            icon: "/Start.svg",
            title: "Starter Grant Program",
            link: "/about/starterGrant",
          },
        ],
      },
    ],
  },
  {
    listName: "Pricing",
    isRes: "no",
    link: "/pricing",
  },
  {
    listName: "Contact Us",
    isRes: "no",
    link: "/contact",
  },
];

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState("");
  const { push } = useRouter();
  const handleClick = (link: string) => {
    push(link);
    setShow(false);
  };

  return (
    <section className="block xl:hidden  w-full py-3 main-container">
      <div className="w-full flex justify-between items-center">
        <Link href="">
          <div className="cursor-pointer">
            <img src="/logo.png" alt="" className="w-40 sm:w-40" />
          </div>
        </Link>
        <div className="flex gap-5">
          <div className="h-10 w-10 bg-gradient-to-br from-[#DAEDF9] to-[#D6D7EB] rounded-full flex items-center justify-center">
            <Search />
            {/* <FaSistrix className="text-[#333333] text-xl font-bold" /> */}
          </div>
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="h-10 w-10 bg-gradient-to-br from-[#DAEDF9] to-[#D6D7EB] rounded-full flex items-center justify-center"
          >
            <HiMenuAlt3 className="text-[#333333] text-2xl" />
          </button>
        </div>
      </div>

      <div
        className={`${
          show
            ? "opacity-1 visible translate-x-0 bg-[#00000054] bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter"
            : "-translate-x-[100%] opacity-0"
        } fixed left-0 top-0 bottom-0 min-h-screen w-full transition-all duration-300 ease-in-out`}
      >
        <motion.div
          transition={{ delay: 0.2, duration: 0.5 }}
          animate={show ? "open" : "closed"}
          variants={variants}
          className="scrollBarNone h-full w-4/5 overflow-scroll !bg-white !z-[999] pb-2 md:w-1/2"
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b p-3">
              <Link href="">
                <img
                  src="/logo.png"
                  className="mr-3 w-40 sm:w-40"
                  alt="SearchingYard LOGO_SVG"
                />
              </Link>

              <span
                onClick={() => setShow((prev) => !prev)}
                className="text-black cursor-pointer"
              >
                <IoClose className="text-3xl" />
              </span>
            </div>
            <div className="p-3 flex flex-col gap-2">
              {NAVBAR_OPTIONS_ARRAY?.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div
                    onClick={() =>
                      setExpanded((prev) =>
                        prev === item?.listName ? "" : item?.listName
                      )
                    }
                    className="w-full flex items-center justify-between"
                  >
                    <div className={`flex items-center rounded-md p-1`}>
                      <div className="text-xl font-bold text-indigo-950">
                        {item.listName}
                      </div>
                    </div>
                    {item?.optionList && (
                      <div>
                        <BiChevronDown
                          className={`text-2xl common-transition ${
                            expanded === item?.listName ? "-rotate-180" : ""
                          }`}
                        />
                      </div>
                    )}
                  </div>
                  {item?.optionList && (
                    <div
                      className={`animate-collapse grid common-transition ease-in-out ${
                        expanded === item?.listName
                          ? "grid-rows-[1fr] "
                          : "grid-rows-[0fr] "
                      }`}
                    >
                      <div className="overflow-hidden w-full">
                        <div className="px-1 space-y-4">
                          {/* //? 2nd nested array mapped  */}
                          {item?.optionList?.map((elm, index) => (
                            <div key={index} className="space-y-4">
                              {/* for checking title is present or not */}
                              {elm?.title ? (
                                <h6 className="text-lg font-medium  text-gray-600">
                                  {elm?.title}
                                </h6>
                              ) : null}
                              <div className="flex flex-col gap-3">
                                {/* //? 3rd nested array mapped  */}
                                {elm?.data?.map((dataItem, dataIndex) => (
                                  <Link
                                    href={dataItem?.link ? dataItem?.link : " "}
                                    key={dataIndex}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span>
                                        <img
                                          src={dataItem?.icon}
                                          alt="icon"
                                          className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-lg"
                                        />
                                      </span>
                                      <p className="text-base font-bold ">
                                        {dataItem?.title}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-3 flex w-full flex-col md:flex-row gap-3">
              <button className=" text-white text-xl capitalize font-semibold px-5 py-2 border-2 border-primary rounded-lg hover:bg-indigo-700  bg-gradient-to-r from-primary to-secondary">
                Start for free
              </button>

              <button className="py-2.5 w-full text-xl md:w-1/2 hover:bg-indigo-700 common-transition text-black font-semibold rounded-3xl tracking-wide">
                Starter login
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsiveNavbar;
