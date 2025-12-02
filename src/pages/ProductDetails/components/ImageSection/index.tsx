import { useState } from "react";

interface ProductImagesProps {
  image_url_list: string[];
}

export default function ProductImages({ image_url_list }: ProductImagesProps) {
  const [mainImage, setMainImage] = useState<string>(image_url_list[0]);

  return (
    <>
      <img
        src={mainImage}
        className="w-full object-cover"
      />
      <div className="flex gap-3 mt-4 justify-center">
        {image_url_list.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setMainImage(img)}
            className={`
              w-15 h-15 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border
              transition-all duration-100
              ${mainImage === img ? "border-red-400" : "border-gray-300"}
            `}
          />
        ))}
      </div>
    </>
  );
}
