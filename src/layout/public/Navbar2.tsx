import { BsCart3 } from "react-icons/bs";

/* eslint-disable @next/next/no-img-element */
export default function Navbar2() {
  return (
    <section className="bg-white text-black p-4">
      <div className="flex justify-between ">
        <img src="" alt="logo" />
        <div className="flex admin-gap text-lg font-medium">
          <div className="relative group">
            <p className="cursor-pointer">Category</p>
            <div className="absolute hidden bg-black text-black p-2 space-y-2 group-hover:block">
              <a href="/category/men">
                <a className="block hover:text-gray-700">Men</a>
              </a>
              <a href="/category/women">
                <a className="block hover:text-gray-700">Women</a>
              </a>
              <a href="/category/kids">
                <a className="block hover:text-gray-700">Kids</a>
              </a>
            </div>
          </div>
          <a href="/men">
            <a className="hover:text-gray-700">Men</a>
          </a>
          <a href="/women">
            <a className="hover:text-gray-700">Women</a>
          </a>
          <a href="/kids">
            <a className="hover:text-gray-700">Kids</a>
          </a>
          <a href="/contact">
            <a className="hover:text-gray-700">Contact</a>
          </a>
        </div>
        <div>
          <BsCart3 className="text-xl" />
        </div>
      </div>
    </section>
  );
}
