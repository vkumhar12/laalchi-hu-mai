// components/SizePicker.tsx

import { useState } from "react";

type SizePickerProps = {
  availableSizes: number[];
};

const SizePicker: React.FC<SizePickerProps> = ({ availableSizes }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSizeClick = (size: number) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  return (
    <div className="flex gap-2">
      {availableSizes.map((size) => (
        <button
          key={size}
          className={`px-5 py-3 rounded border ${
            selectedSize === size
              ? "bg-black text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizePicker;
