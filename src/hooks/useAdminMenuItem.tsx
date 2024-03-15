import { BiBox, BiImageAdd, BiImages, BiSupport } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const useAdminMenuItem = () => [
  {
    _id: "1",
    title: "Dashboard",
    route: "/admin",
    icon: <RxDashboard className="text-xl" />,
  },

  {
    _id: "2",
    title: "Product",
    icon: <FiShoppingCart className="text-xl" />,
    submenus: [
      {
        _id: "2.1",
        title: "Add New Product",
        route: "/admin/product/add-products",
        icon: <IoAddOutline className="text-xl" />,
      },
      {
        _id: "2.2",
        title: "Manage Products",
        route: "/admin/product",
        icon: <BiBox className="text-xl" />,
      },
    ],
  },
  {
    _id: "3",
    title: "Orders",
    route: "/admin/orders",
    icon: <HiOutlineShoppingBag className="text-xl" />,
  },
  {
    _id: "4",
    title: "Testimonal",
    icon: <HiOutlineClipboardDocumentList className="text-xl" />,
    submenus: [
      {
        _id: "4.1",
        title: "Add Testimonal",
        route: "/admin/testimonal/add-testimonal",
        icon: <BiImageAdd className="text-xl" />,
      },
      {
        _id: "4.2",
        title: "Manage Testimonal",
        route: "/admin/testimonal",
        icon: <BiImages className="text-xl" />,
      },
    ],
  },
  {
    _id: "5",
    title: "Contacts",
    route: "/admin/contacts",
    icon: <BsChatSquareText className="text-xl" />,
  },
  // {
  //   _id: "6",
  //   title: "Home Banner",
  //   icon: <BsCardImage className="text-xl" />,
  //   submenus: [
  //     {
  //       _id: "6.1",
  //       title: "Add Banner",
  //       route: "/admin/banner/add-banner",
  //       icon: <BiImageAdd className="text-xl" />,
  //     },
  //     {
  //       _id: "6.2",
  //       title: "Manage Banner",
  //       route: "/admin/banner",
  //       icon: <BiImages className="text-xl" />,
  //     },
  //   ],
  // },
  // {
  //   _id: "3",
  //   title: "Category",
  //   route: "/admin/category",
  //   icon: <BiLayer className="text-xl" />,
  // },
  // {
  //   _id: "4",
  //   title: "Tags",
  //   route: "/admin/tags",
  //   icon: <MdOutlineCategory className="text-xl" />,
  // },

  // {
  //   _id: "7",
  //   title: "Influencer Request",
  //   route: "/admin/influencer-request",
  //   icon: <BiUserPlus className="text-xl" />,
  // },

  {
    _id: "6",
    title: "User",
    icon: <BiSupport className="text-xl" />,
    route: "/admin/all-user",
  },
];

export default useAdminMenuItem;
