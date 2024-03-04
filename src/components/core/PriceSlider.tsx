import React, { useState } from "react";

const PriceSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setMaxPrice(value);
  };
  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(100000);
  };

  return (
    <div className="flex flex-col gap-3 items-start p-3">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-medium">Price Filter</h1>
        <button
          onClick={handleReset}
          className="text-black border-2 border-black font-medium text-sm py-1 px-3 rounded"
        >
          Reset
        </button>
      </div>
      <label className="text-sm font-medium">Min Price:</label>
      <input
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="w-full border rounded-md px-2 py-1"
      />
      <label className="text-sm font-medium">Max Price:</label>
      <input
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="w-full border rounded-md px-2 py-1"
      />
      <div className="flex-1">
        <input
          type="range"
          min={0}
          max={100000}
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full"
        />
        <input
          type="range"
          min={0}
          max={100000}
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PriceSlider;
