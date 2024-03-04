// import { useState } from "react";

// const DiscountCheckbox = () => {
//   const [checked, setChecked] = useState();
//   const handleDiscountChange = (index: number) => {
//     const newDiscount = [...discount];
//     newDiscount[index] = !newDiscount[index];
//     setDiscount(newDiscount);
//   };
//   return (
//     <div>
//       <input
//         type="checkbok"
//         value={checked}
//         onChange={handleDiscountChange}
//         className="w-full border rounded-md px-2 py-1"
//       />
//     </div>
//   );
// };

// export default DiscountCheckbox;

import React, { useState } from "react";

const DiscountCheckbox: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [discount, setDiscount] = useState<boolean[]>(Array(9).fill(false));

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
  };

  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(100);
    setDiscount(Array(9).fill(false));
  };

  const handleDiscountChange = (index: number) => {
    const newDiscount = [...discount];
    newDiscount[index] = !newDiscount[index];
    setDiscount(newDiscount);
  };

  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-col mt-4">
        <label className="">Discount:</label>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex gap-1 items-center">
            <input
              type="checkbox"
              checked={discount[index]}
              onChange={() => handleDiscountChange(index)}
              id={`discount-${index}`}
              className="mr-1"
            />
            <label htmlFor={`discount-${index}`}>
              {50 - index * 10}% or more
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountCheckbox;
