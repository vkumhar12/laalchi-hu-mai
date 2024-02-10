/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import useScrollPosition from "@/hooks/useScrollPosition";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { IoPersonAddOutline, IoSearchOutline } from "react-icons/io5";
import ResponsiveNavbar from "./ResponsiveNavbar";
// import ResponsiveNavbar from "./ResponsiveNavbar";

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
                src="/main-logo.png"
                alt="laalchi-hu-mai-logo"
                className="w-full h-14"
              />
            </Link>
            <div className="flex items-center cursor-pointer gap-8 pl-4 h-28">
              <Link href="/">
                <div className="font-medium text-lg hover:underline">Home</div>
              </Link>
              <Link href="/product">
                <div className="font-medium text-lg hover:underline">
                  Products
                </div>
              </Link>
              <Link href="/about">
                <div className="font-medium text-lg hover:underline">
                  About us
                </div>
              </Link>
              <div className="font-medium text-lg hover:underline">
                Testimonal
              </div>
              <Link href="/contact">
                <div className="font-medium text-lg hover:underline">
                  Contact
                </div>
              </Link>
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
              <Link href="/login-page">
                <button className=" text-secondary text-lg p-2  hover:bg-secondary/10 rounded-md cursor-pointer common-transition">
                  <IoPersonAddOutline />
                </button>
              </Link>
            </Tooltip>
            <Tooltip title="Cart">
              <Link href="/add-to-cart">
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
