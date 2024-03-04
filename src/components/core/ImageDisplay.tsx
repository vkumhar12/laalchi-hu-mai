/* eslint-disable @next/next/no-img-element */
// ImageGallery.tsx

import React, { useState } from "react";

type ImageGalleryProps = {
  images: string[]; // Array of image URLs
  defaultImage?: string; // Optional default image URL
};

const ImageDisplay: React.FC<ImageGalleryProps> = ({
  images,
  defaultImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    defaultImage || images[0] || null
  );

  return (
    <div className="flex admin-gap">
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="cursor-pointer w-20 h-20 object-cover"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Large Image */}
      <div className="ml-8">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="h-[35rem] w-[35rem] object-cover "
          />
        ) : (
          <p className="text-gray-500">Click on an image to view it here.</p>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
