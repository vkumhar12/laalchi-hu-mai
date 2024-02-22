import Layout from "@/layout/public";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function BuyNow() {
  const [isAddress, setAddress] = useState(false);
  return (
    <Layout title="CheckOut">
      <section className="main-container flex flex-col admin-gap bg-slate-100">
        <div className="flex justify-between pt-10 bottom-spacing">
          <h1 className="graph-title">Price Details</h1>
          <Link href="/">
            <h1 className="text-pink-blue font-medium hover:underline">
              Continue Shopping
            </h1>
          </Link>
        </div>
        <div className="flex flex-col admin-gap w-3/5 bottom-spacing">
          <div className="admin-card ">
            <div className="flex flex-col admin-gap">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-primary-text">
                  DELIVERY ADDRESS
                </div>
                <p
                  className={`text-xl cursor-pointer `}
                  onClick={() => setAddress((prevState) => !prevState)}
                >
                  {isAddress ? (
                    <div className="rotate-180">
                      <FaAngleDown />
                    </div>
                  ) : (
                    <FaAngleDown />
                  )}
                </p>
              </div>
              {isAddress && (
                <div className="">
                  <input type="radio" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
