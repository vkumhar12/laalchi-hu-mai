import { Product } from "@/components/all-category";
import { DiscountCheckbox, PriceSlider } from "@/components/core";
import Layout from "@/layout/public";
import Link from "next/link";

export default function Products() {
  return (
    <Layout title="Products">
      <section className="main-container flex flex-col admin-gap pt-6 bottom-spacing">
        <div className="flex justify-between">
          <h1 className="graph-title">Product</h1>
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-medium text-gray-600">Home/</h1>
            </Link>
            <h1 className="font-medium text-gray-400 cursor-not-allowed">
              Products
            </h1>
          </div>
        </div>
        <div className="p-6 w-full bg-gray-200 rounded-md shadow-[0_0.25rem_1.125rem_rgba(75,70,92,0.1)] flex justify-between items-center">
          <div className="text-xl font-medium underline">Filter</div>
          <select className="p-2 rounded-md">
            <option value="default">Default</option>
            <option value="Sort by value">Sort by value</option>
            <option value="Sort by Popularity">Sort by Popularity</option>
            <option value="Sort by Latest">Sort by Latest</option>
            <option value="Sort by Price: low-high">
              Sort by Price: low-high
            </option>
            <option value="Sort by Price: high-low">
              Sort by Price: high-low
            </option>
          </select>
        </div>
        <div className="flex admin-gap">
          <div className="w-1/5 bg-gray-200 rounded-md h-screen shadow-[0_0.25rem_1.125rem_rgba(75,70,92,0.1)]">
            <div className="">
              <PriceSlider />
              <DiscountCheckbox />
            </div>
          </div>
          <div className="w-4/5">
            <Product />
          </div>
        </div>
      </section>
    </Layout>
  );
}
