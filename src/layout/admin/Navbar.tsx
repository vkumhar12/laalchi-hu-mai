/* eslint-disable @next/next/no-img-element */
import useAdminMenuItem from "@/hooks/useAdminMenuItem";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";

import {
  MdKey,
  MdKeyboardDoubleArrowRight,
  MdLogout,
  MdOutlineNotifications,
} from "react-icons/md";

const Navbar = () => {
  const MenuItems = useAdminMenuItem();
  const { pathname } = useRouter();
  const { user } = useAuth();
  // console.log(user);

  return (
    <nav className="sticky top-0 z-[90] w-full rounded-md bg-gray-200 h-20 flex items-center">
      <section className="px-6 w-full hidden lg:flex justify-between gap-4">
        <div className="w-3/4 flex items-center justify-between gap-4">
          <h2 className="flex items-center text-lg tracking-wider font-semibold uppercase">
            {MenuItems.find((item) => item.route === pathname)?.title}
            {
              MenuItems?.find((item) =>
                item?.submenus?.find((submenus) => submenus.route === pathname)
              )?.title
            }
            {MenuItems.find((item) =>
              item?.submenus?.find((submenus) => submenus.route === pathname)
            )?.title ? (
              <span className="px-2 flex items-center">
                <MdKeyboardDoubleArrowRight className="!text-lg" />
              </span>
            ) : (
              <span> </span>
            )}
            {
              MenuItems?.find((item) =>
                item?.submenus?.find((submenus) => submenus.route === pathname)
              )?.submenus?.find((submenus) => submenus.route === pathname)
                ?.title
            }
          </h2>
        </div>
        <div className="w-1/3 flex gap-6 items-center justify-end">
          <Link
            href="/"
            className=" flex items-center gap-2 text-gray-800 p-2 bg-blue-50 rounded-md"
          >
            <FaEarthAmericas className="text-2xl" />
            <span className=" font-semibold">Browse Website</span>
          </Link>
          <div>
            <div className="w-10 h-10 bg-amber-100 rounded-lg">
              <Link href="/admin/notifications">
                <p className="w-full h-full flex justify-center items-center">
                  <MdOutlineNotifications
                    size={28}
                    className=" text-black cursor-pointer"
                  />
                </p>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <p className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <span className="w-full h-full flex justify-center items-center">
                <AiOutlineUser
                  size={28}
                  className=" text-white cursor-pointer"
                />
              </span>
            </p>
            <section className="absolute top-full right-0 w-72 scale-0 origin-top-right pt-2 bg-white text-primary rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 group-hover:scale-100 transition-all duration-200 ease-in-out">
              <aside className="flex flex-col items-center gap-3 px-3 pb-2">
                <img src="/man.png" alt="" className="w-16 h-16" />
                <div className="flex flex-col">
                  <p>{user?.name}</p>
                  <p className="text-sm">{user?.email}</p>
                </div>
              </aside>
              <div className="flex flex-col py-2">
                <Link href="/admin/settings/change-password">
                  <p className="flex gap-2 items-center px-3 hover:bg-blue-100 py-2 text-base text-gray-500 tracking-wider font-medium cursor-pointer">
                    <MdKey className="!text-gray-500 !text-3xl" />
                    Change Password
                  </p>
                </Link>
                <Link
                  href={`/login`}
                  className="flex gap-2 items-center px-3 hover:bg-blue-100 cursor-pointer py-2 text-base text-gray-500 tracking-wider font-medium"
                >
                  <MdLogout className="!text-gray-500 !text-3xl" />
                  <p className="">Log Out</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
