import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const NewArrivalCard = ({
  item,
  index,
}: {
  item: NEWARRIVALPROPS;
  index: number;
}) => {
  // console.log("check images ", item?.variants?.[0]?.img);
  return (
    <motion.div
      layout
      initial={{ scale: 1, opacity: 0, y: 300 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: index < 5 ? index * 0.18 : 0.1 }}
      exit={{ scale: 1, opacity: 0, y: 20 }}
      viewport={{ once: true }}
      className="flex flex-col gap-3 items-center w-full group"
    >
      <div className=" w-full h-full bg-gray-50 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="h-full w-full flex flex-col items-center justify-between gap-5 p-4">
          <p className="font-bold text-[1rem] text-primary text-center">
            {item?.title}
          </p>
          <div className="w-full h-[10rem]">
            <img
              src={item?.image || "/home/productimgenotavailable.jpg"}
              alt=""
              className="w-full h-full object-contain group-hover:scale-110 duration-500"
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className=" text-center font-semibold text-gray-500 ">
              {item?.text}
            </p>
            <a
              href=""
              className=" text-lg font-semibold flex items-center gap-2 relative navbar__link"
            >
              Explore Now <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewArrivalCard;
