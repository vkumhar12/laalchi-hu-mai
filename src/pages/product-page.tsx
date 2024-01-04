/* eslint-disable @next/next/no-img-element */
import { ImageDisplay, SizePicker } from "@/core";
import Layout from "@/layout/public";
import { BiSolidStar } from "react-icons/bi";
import { FaStarHalf } from "react-icons/fa6";

export default function ProductPage() {
  const totalStars = 5;
  const averageRating = 3.5;
  const availableSizes = [6, 7, 8, 9, 10, 11];

  const images = [
    "allcategory1.jpg",
    "allcategory2.jpg",
    "allcategory3.jpg",
    "allcategory4.jpg",
  ];
  return (
    <Layout title="Products Page">
      <section className="main-container">
        <div className="top-spacing">
          {/* <div></div> */}
          <div className="flex gap-2 items-center justify-center">
            <div className="w-1/2 flex justify-center items-center">
              {/* <img
                src="/productImg1.webp"
                alt=""
                className="h-[35rem] w-[35rem]"
              /> */}
              <ImageDisplay images={images} />
            </div>
            <div className="flex flex-col admin-gap w-1/2">
              {/* <StarRatingSetter
                totalStars={totalStars}
                averageRating={averageRating}
              /> */}
              <p className="flex">{renderStars(4.5)}</p>

              <div>
                <h1 className="graph-title">AIR JORDAN 7 RETRO</h1>
                <p>Jordan, Nike</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium text-primary-text">
                  QUICK OVERVIEW :
                </p>
                <hr />
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolorem expedita eius tempore exercitationem culpa,
                  voluptates assumenda dolores, aspernatur dicta, odit sapiente
                  impedit labore vel. Molestias nostrum, numquam vitae expedita
                  autem rem modi distinctio.
                </p>
              </div>
              <div className="flex flex-col admin-gap">
                <div className="flex justify-between">
                  <h1 className="tex-lg font-medium">CHOOSE YOUR SIZE</h1>
                  <p className="cursor-pointer hover:underline text-sm font-medium">
                    Size Chart
                  </p>
                </div>
                <hr />
                <div>
                  <SizePicker availableSizes={availableSizes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <BiSolidStar key={index} className="text-yellow-500 text-2xl" />
      ))}
      {hasHalfStar && <FaStarHalf className="text-yellow-500 text-2xl" />}
    </>
  );
};
