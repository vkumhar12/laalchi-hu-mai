/* eslint-disable @next/next/no-img-element */
import useAdminMenuItem from "@/hooks/useAdminMenuItem";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
const Drawer = () => {
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const router = useRouter();
  const MenuItems = useAdminMenuItem();

  return (
    <section className="hidden lg:block sticky top-5 left-0 min-w-[15rem] w-60 h-[calc(100vh-40px)] bg-white rounded-3xl shadow-[rgba(0,_98,_90,_0.2)_0px_0px_12px] overflow-hidden">
      {/* Logo section */}
      <div className=" w-full h-full flex flex-col gap-1">
        <div className="grid place-items-center h-24">
          <img
            src="/main-logo.png"
            alt="printbrix"
            className="w-36 cursor-pointer"
            onClick={() => router.push("/admin")}
          />
        </div>

        {/* Main menus section */}
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {MenuItems?.map((menuItem) => (
            <Fragment key={menuItem?._id}>
              {/* Main menu items */}
              <div
                className={`w-full group flex items-center justify-between px-4 py-3 text-gray-500 hover:text-whatsapp hover:bg-whatsapp/10 transition-all duration-150 ease-in-out cursor-pointer border-l-4 ${
                  router.asPath === menuItem.route
                    ? "bg-whatsapp/10 text-whatsapp border-whatsapp/75"
                    : "border-transparent"
                }`}
                onClick={() => {
                  // Navigate to the main menu item route if available
                  if (menuItem?.route) return router?.push(menuItem?.route);

                  // Toggle submenu visibility
                  menuItem?.submenus &&
                    setSelectedSubMenu((prev) =>
                      prev === menuItem._id ? "" : menuItem._id
                    );
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{menuItem?.icon}</span>
                  <p className="font-medium whitespace-nowrap">
                    {menuItem?.title}
                  </p>
                </div>
                {menuItem?.submenus ? (
                  // Show expand/collapse icon based on submenu visibility
                  selectedSubMenu === menuItem?._id ? (
                    <span>
                      <MdExpandLess className="text-xl common-transition" />
                    </span>
                  ) : (
                    <span>
                      <MdExpandMore className="text-xl common-transition" />
                    </span>
                  )
                ) : null}
              </div>

              {/* Submenus section */}
              {menuItem?.submenus && selectedSubMenu === menuItem?._id ? (
                <div className="pl-4 mt-2">
                  {menuItem?.submenus.map((submenuItem) => (
                    <div
                      key={submenuItem?._id}
                      className={`w-full flex items-center px-4 py-3 text-gray-500 hover:text-whatsapp hover:bg-whatsapp/10 transition-all duration-150 ease-in-out cursor-pointer ${
                        router.asPath === submenuItem.route
                          ? "bg-whatsapp/10 text-whatsapp"
                          : ""
                      }`}
                      onClick={() => {
                        // Navigate to the submenu item route if available
                        if (submenuItem?.route)
                          return router?.push(submenuItem?.route);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span>{submenuItem?.icon}</span>
                        <p className="font-medium whitespace-nowrap">
                          {submenuItem?.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </Fragment>
          ))}

          {/* Logout section */}
          <div
            className={`w-full group flex items-center justify-between text-gray-500 hover:text-whatsapp px-5 py-3 hover:bg-whatsapp/10 common-transition cursor-pointer`}
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:text-whatsapp">
                <BiLogOutCircle className="text-xl" />
              </span>
              <p className="font-medium whitespace-nowrap">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drawer;