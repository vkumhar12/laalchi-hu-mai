import router from "next/router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

/* eslint-disable @next/next/no-img-element */

export default function TestimonalMainPage() {
  const shoeReviews = [
    {
      reviewer: "Lipun Dash",
      imageUrl: "/story-1.webp",
      rating: 5,
      date: "Dec 10, 2023",
      comments:
        "I recently purchased these shoes for my daily runs, and I couldn't be happier! The cushioning provides excellent support, making my runs more comfortable. They're lightweight, breathable, and the design is stylish. I've received compliments on them too. Highly recommend these for any runners out there!",
    },
    {
      reviewer: "Debashish Oram",
      imageUrl: "/story-2.jpg",
      rating: 4,
      date: "Dec 10, 2023",
      comments:
        "I've been using these shoes for my gym workouts, and they've held up well. The grip is fantastic, especially during high-intensity workouts. However, I would have liked a bit more arch support. Overall, a solid pair of shoes for the price.",
    },
    {
      reviewer: "Satendra Pal",
      imageUrl: "/story-3.jpg",
      rating: 3,
      date: "Dec 10, 2023",
      comments:
        "I purchased these shoes hoping for durability and comfort, but I found the sizing to be a bit off. They felt a bit snug, especially in the toe area. The overall quality is decent, but I expected a better fit. I recommend trying them on in-store before purchasing.",
    },
  ];
  return (
    <div className="flex flex-col admin-gap">
      <div className="grid grid-cols-1 admin-gap lg:grid-cols-3">
        {shoeReviews?.map((item, index) => (
          <div
            className="hover:border border-pink-blue/20 p-3 flex flex-col admin-gap"
            key={index}
            onClick={() => router.push(`/testimonal`)}
          >
            <img
              className="h-72 w-full rounded-md"
              src={item?.imageUrl}
              alt={`Review Image ${index}`}
            />
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">{item?.date}</p>
              <p className="description line-clamp-4 text-sm ">
                {item.comments}
              </p>
              <p className="font-semibold text-gray-500">
                By : {item.reviewer}
              </p>
              <button className="text-start cursor-pointer flex gap-2 items-center  text-pink-blue hover:text-green-400">
                Read More
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
