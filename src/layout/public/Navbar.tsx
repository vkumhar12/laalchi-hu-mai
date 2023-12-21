/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import useScrollPosition from "@/hooks/useScrollPosition";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { IoPersonAddOutline, IoSearchOutline } from "react-icons/io5";
import ResponsiveNavbar from "./ResponsiveNavbar";
// import ResponsiveNavbar from "./ResponsiveNavbar";

interface ISubArr {
  _id: string;
  icon: string;
  title: string;
  description?: string;
  path: string;
}
interface AllICategory {
  _id: string;
  title: string;
  subArr: ISubArr[];
}
interface IResourceData {
  _id: string;
  title: string;
  subArr: ISubArr[];
}

export const allCategory: AllICategory = {
  _id: "1",
  title: "",
  subArr: [
    {
      _id: "1.1",
      icon: "/product-release.png",
      title: "NEW RELEASES",
      description: "New shoe styles just landed check them out..!",
      path: "/solutions/business",
    },
    {
      _id: "1.2",
      icon: "/puzzle.png",
      title: "FEATURES SHOES",
      description: "Check out our latest feature releases..!",
      path: "/solutions/academic-institutions",
    },
    {
      _id: "1.3",
      icon: "/increase.png",
      title: " NEW TRENDING",
      description: "Shop the newest shoe trends now..!",
      path: "/solutions/government",
    },
    {
      _id: "1.4",
      icon: "/best-seller.png",
      title: " BEST SELLER",
      description: "See our best sellers today..!",
      path: "/solutions/government",
    },
  ],
};

export const featureData: AllICategory = {
  _id: "1",
  title: "Features",
  subArr: [
    {
      _id: "1.1",
      icon: "/easy-upload.svg",
      title: "Easy upload and preservation",
      path: "/features/easy-upload",
    },
    {
      _id: "1.2",
      icon: "/icon-2.svg",
      title: "Secure cloud storage",
      path: "/features/secure-cloud-storage",
    },
    {
      _id: "1.3",
      icon: "/active-preservation.svg",
      title: "Active Digital Preservation",
      path: "/features/active-digital-preservation",
    },
    {
      _id: "1.4",
      icon: "/catalog.svg",
      title: "Catalog Integration",
      path: "/features/catalog-integration",
    },
    {
      _id: "1.5",
      icon: "/metadata.svg",
      title: "Manage content & metadata",
      path: "/features/manage-content",
    },
    {
      _id: "1.6",
      icon: "/m365.svg",
      title: "Seamless preservation for Microsoft 365",
      path: "/features/seamless-preservation",
    },
    {
      _id: "1.7",
      icon: "/access.svg",
      title: "Access and Discovery",
      path: "/features/access-discovery",
    },
    {
      _id: "1.8",
      icon: "/developers.svg",
      title: "Integrate &  extend with APIs",
      path: "/features/integrate-extend-api",
    },
  ],
};

export const aboutData: AllICategory = {
  _id: "1",
  title: "Preservica",
  subArr: [
    {
      _id: "1.1",
      icon: "/about.svg",
      title: "About Preservica",
      description: "Protecting the world's digital memory, one file at a time",
      path: "/about/about",
    },
    {
      _id: "1.2",
      icon: "/Careers.svg",
      title: "Careers",
      description:
        "Join an outstanding global team at the forefront of it's field",
      path: "/about/carrers",
    },
    {
      _id: "1.3",
      icon: "/Management-Team.svg",
      title: "Management Team",
      description:
        "Experience and vision at the forefront of digital preservation",
      path: "/about/team",
    },
    {
      _id: "1.4",
      icon: "/Trust-Center.svg",
      title: "Trust Center",
      description:
        "View and download Preservica Security, Compliance and Quality resources",
      path: "/about/trust",
    },
    {
      _id: "1.5",
      icon: "/Sustainability.svg",
      title: "Sustainability",
      description:
        "Anew standard of sustainable long-term digital preservation",
      path: "/about/sustainability",
    },
    {
      _id: "1.6",
      icon: "/Start.svg",
      title: "Starter Grant Program",
      description:
        "Providing underfunded archives the opportunity to get their projects off the ground",
      path: "/about/starterGrant",
    },
  ],
};

export const resourceData: IResourceData[] = [
  {
    _id: "1",
    title: "Learn",
    subArr: [
      {
        _id: "1.1",
        icon: "/news.svg",
        title: "Blogs and News",
        path: "/resources/blog",
      },
      {
        _id: "1.2",
        icon: "/events.svg",
        title: "Events and Webinars",
        path: "/resources/webinar-playback",
      },
      {
        _id: "1.3",
        icon: "/customers.svg",
        title: "Customer stories",
        path: "/resources/customer-stories",
      },
      {
        _id: "1.4",
        icon: "/accesss.svg",
        title: "Access & Discovery showcase",
        path: "/resources/access",
      },
      {
        _id: "1.5",
        icon: "/preservation.svg",
        title: "Digital Preservation 101",
        path: "/resources/digital-preservation",
      },
    ],
  },
  {
    _id: "2",
    title: "Connect",
    subArr: [
      {
        _id: "2.1",
        icon: "/icon-1.svg",
        title: "Community Hub",
        path: "/resources",
      },
      {
        _id: "2.2",
        icon: "/icon-2.svg",
        title: "Support",
        path: "/resources/support",
      },
      {
        _id: "2.3",
        icon: "/icon-3.svg",
        title: "Developers",
        path: "/resources",
      },
      {
        _id: "2.4",
        icon: "/icon-1.svg",
        title: "Service desk login",
        path: "/resources/login",
      },
      {
        _id: "2.5",
        icon: "/partners.svg",
        title: "Partners",
        path: "/resources/partners",
      },
    ],
  },
];

const Navbar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const mainDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openSearch &&
        mainDivRef.current &&
        !mainDivRef.current.contains(event.target as Node)
      ) {
        setOpenSearch(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSearch]);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const [keyword, setKeyword] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const scrollPosition = useScrollPosition();

  return (
    <header className="w-full sticky z-[999] top-0">
      <nav
        className={`${
          scrollPosition > 3 ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <section className="hidden main-container lg:flex items-center justify-between ">
          <aside className="w-[70%] flex justify-between items-center gap-8">
            <Link href="">
              <img
                src="/logo.png"
                alt="laalchi-hu-mai-logo"
                className="w-40 "
              />
            </Link>
            <div className="flex items-center gap-8 pl-4">
              <HoverDropdown title="Category" path="" data={allCategory} />
              {/* <HoverDropdown title="Mens" path="" data={featureData} /> */}
              {/* <ResourceDropdown title="Women" path="" data={resourceData} /> */}
              <div className="font-medium text-lg">Mens</div>
              <div className="font-medium text-lg">Women</div>
              <div className="font-medium text-lg">Testimonal</div>
              <div className="font-medium text-lg">Contact</div>
              {/* <HoverDropdown title="Testimonal" path="" data={aboutData} /> */}
              {/* <HoverDropdown title="Contact" path="/pricing" /> */}
            </div>
          </aside>
          <aside className="w-[30%] flex items-center text-2xl justify-end gap-1">
            <Tooltip title="Search Product">
              <button
                className="cursor-pointer text-pink-blue p-2  hover:bg-pink-blue/10 rounded-md common-transition"
                onClick={toggleSearch}
              >
                <IoSearchOutline className="text-lg " />
              </button>
            </Tooltip>
            <Tooltip title="Login">
              <Link href="">
                <button className=" text-secondary text-lg p-2  hover:bg-secondary/10 rounded-md cursor-pointer common-transition">
                  <IoPersonAddOutline />
                </button>
              </Link>
            </Tooltip>
            <Tooltip title="Cart">
              <Link href="">
                <button className="text-lg text-dark p-2  hover:bg-dark/10 rounded-md cursor-pointer common-transition">
                  <BsCart3 />
                </button>
              </Link>
            </Tooltip>
            <Tooltip title="Wishlist">
              <Link href="">
                <button className="text-lg text-pinterest/80 p-2  hover:bg-pinterest/10 rounded-md cursor-pointer common-transition">
                  <FaRegHeart />
                </button>
              </Link>
            </Tooltip>
          </aside>
        </section>
        <ResponsiveNavbar />
      </nav>
      {/* //?search operation */}

      {openSearch && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-opacity-100 z-9999">
          <div className="p-4 rounded-md w-full flex justify-center items-center">
            <button
              onClick={toggleSearch}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <FaTimes className="font-bold p-2 rounded-full border-2 border-pinterest text-pinterest text-4xl" />
            </button>
            <div ref={mainDivRef} className="w-1/2 p-3 rounded-lg mt-10">
              <form>
                <div className="flex relative flex-col lg:flex-row gap-2">
                  <div className="absolute bottom-0 right-0 pr-2 inset-y-0 left-0 flex  items-center pl-2 pointer-events-none">
                    <BiSearchAlt2 className="text-2xl" />
                  </div>
                  <input
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    type="search"
                    className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border-3 border-blue-500 rounded bg-gray-50"
                    placeholder="I am looking for..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white capitalize px-5 py-2 border-primary rounded bg-gradient-to-r from-primary to-secondary"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;

const HoverDropdown = ({
  title,
  data,
  path,
}: {
  title: string;
  data?: AllICategory;
  path: string;
}) => {
  return (
    <article className="group py-10 cursor-pointer">
      <div className="flex items-center gap-1 font-medium group-hover:text-themeBlue common-transition">
        <Link href={path}>
          <span>{title}</span>
        </Link>
        {data && (
          <BiChevronDown
            fontSize={24}
            className="group-hover:-rotate-180 common-transition group-hover:text-themeBlue"
          />
        )}
      </div>
      {data ? (
        <section className="w-full absolute bg-white top-full group-hover:h-fit common-transition left-0 overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 group-hover:shadow-[rgba(50,_50,_105,_0.15)_0px_0px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="main-container grid grid-cols-5">
            <aside className="col-span-3 flex flex-col pt-8 pr-8">
              <h6 className="uppercase font-semibold tracking-wider pb-4 border-b border-b-gray-300">
                {data?.title}
              </h6>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 py-4">
                {data?.subArr?.map((item) => (
                  <Link href={item?.path} key={item._id}>
                    <div
                      className={`flex gap-2 p-4 rounded-md hover:bg-gray-500/5 items-center common-transition ${
                        item?.description ? "items-start" : "items-center"
                      }`}
                    >
                      <span>
                        <img src={item.icon} alt="icon" className="w-14 h-14" />
                      </span>
                      <p className="flex flex-col gap-1">
                        <span className="font-semibold tracking-wide text-gray-800">
                          {item?.title}
                        </span>
                        {item?.description ? (
                          <span className="text-sm tracking-wide font-medium text-primary-text">
                            {item?.description}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
            <aside className="col-span-2 flex flex-col py-8 pl-8 bg-gray-100">
              {title === "About" ? (
                <>
                  <h6 className="uppercase font-semibold tracking-wider pb-4 border-b border-b-gray-300">
                    About us
                  </h6>
                  <div className="mt-8 bg-white p-3 rounded-lg space-y-2">
                    <img
                      src="/Girl-with-digital-globe.jpg"
                      alt="abstract-image"
                      className="rounded-lg"
                    />
                    <p className="tracking-wide capitalize font-semibold">
                      About Preservica
                    </p>
                    <p className="tracking-wide text-gray-800 font-light text-sm">
                      {`The world’s cultural, social, business and political
                      memory is at risk. We’re here to protect it.`}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* <h6 className="uppercase font-semibold tracking-wider pb-4 border-b border-b-gray-300">
                    Our products
                  </h6>
                  <div className="grid grid-cols-2 gap-4 pt-8">
                    <div className="h-28 rounded-md border-primary bg-gradient-to-r from-primary to-secondary relative">
                      <div className="h-[5px] absolute bottom-0 rounded-b-full left-0 right-0 bg-[#0F9EC8]"></div>
                      <h1 className="text-base font-bold text-white px-4 py-2 ">
                        Starter
                      </h1>
                      <p className="text-xs text-white px-4">
                        Start preservation & sharing your digital content - for
                        FREE
                      </p>
                    </div>
                    <div className="h-28 rounded-md bg-gradient-to-r from-[#A657A3] to-[#503A8A] relative">
                      <div className="h-[5px] absolute bottom-0 rounded-b-full left-0 right-0 bg-[#503A8A]"></div>

                      <h1 className="text-base font-bold text-white px-4 py-2 ">
                        Professional
                      </h1>
                      <p className="text-xs text-white px-4">
                        A natural step up from Starter Plus with greater power,
                        flexibility & capacity
                      </p>
                    </div>
                    <div className="h-28 rounded-md bg-[#120A44] relative">
                      <div className="h-[5px] absolute bottom-0 rounded-b-full left-0 right-0 bg-black"></div>

                      <h1 className="text-base font-bold text-white px-4 py-2 ">
                        Enterprise
                      </h1>
                      <p className="text-xs text-white px-4">
                        Performance, security and integration in a dedicated
                        private cloud
                      </p>
                    </div>
                    <div className="h-28 rounded-md bg-white relative">
                      <div className="h-[5px] absolute bottom-0 rounded-b-full left-0 right-0 bg-gradient-to-l from-[#A657A3] via-[#0F9EC8] to-teal-500"></div>

                      <h1 className="text-base font-bold text-[#35245f] px-4 py-2 ">
                        Preserve365
                      </h1>
                      <p className="text-xs text-[#503A8A] px-4">
                        Make Active Digital Preservation part of your Microsoft
                        365 experience
                      </p>
                    </div>
                  </div> */}
                </>
              )}
            </aside>
          </div>
        </section>
      ) : null}
    </article>
  );
};

const ResourceDropdown = ({
  title,
  data,
  path,
}: {
  title: string;
  data: IResourceData[];
  path: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="group py-10 cursor-pointer">
      <div className="flex items-center gap-1 font-medium group-hover:text-themeBlue common-transition">
        <Link href={path}>
          <span>{title}</span>
        </Link>
        {data && (
          <BiChevronDown
            fontSize={24}
            className="group-hover:-rotate-180 common-transition group-hover:text-themeBlue"
          />
        )}
      </div>
      <section className="w-full absolute bg-white top-full group-hover:h-fit common-transition left-0 overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 group-hover:shadow-[rgba(50,_50,_105,_0.15)_0px_0px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="main-container grid grid-cols-12">
          <aside className="col-span-8 flex justify-between gap-8 pt-8 pr-8">
            {data?.map((item) => (
              <div className="w-full flex flex-col" key={item._id}>
                <h6 className="uppercase font-semibold tracking-wider pb-4 border-b border-b-gray-300">
                  {item?.title}
                </h6>
                <div className="space-y-4 py-4">
                  {item?.subArr?.map((item) => (
                    <Link href={item?.path} key={item._id}>
                      <div
                        className={`flex items-center gap-2 p-4 rounded-md hover:bg-gray-500/5 common-transition`}
                      >
                        <span>
                          <img src={item.icon} alt="icon" className="w-8 h-8" />
                        </span>
                        <p className="flex flex-col gap-1">
                          <span className="font-semibold tracking-wide text-gray-800">
                            {item?.title}
                          </span>
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </aside>
          <aside className="col-span-4 flex flex-col p-5 bg-gray-100">
            <h6 className="uppercase font-semibold tracking-wider pb-4 border-b border-b-gray-300">
              Resource highlights
            </h6>
            <div className="flex flex-col gap-4 pt-8">
              <div className="rounded-md bg-white p-2 flex flex-row items-center gap-2">
                <img src="/rese_1.jpg" alt="" className="w-24 rounded-lg" />
                <h1 className="text-sm">
                  Preservica and Backstage Library Works announce partnership
                </h1>
              </div>
              <div className="rounded-md bg-white p-2 flex flex-row items-center gap-2">
                <img src="/rese_2.jpg" alt="" className="w-24 rounded-lg" />
                <h1 className="text-sm">
                  Preservica Safeguards Academic History at The Lawrenceville
                  School
                </h1>
              </div>
              <div className="rounded-md bg-white p-2 flex flex-row items-center gap-2">
                <img src="/rese_3.jpg" alt="" className="w-24 rounded-lg" />
                <h1 className="text-sm">
                  Create a personalized access & discovery portal in minutes
                </h1>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
};
