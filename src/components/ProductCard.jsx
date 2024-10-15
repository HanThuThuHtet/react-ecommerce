import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  
  return (
    <div className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40 " alt={title} />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p>{price}</p>
        <button className="border text-sm px-3 py-1 border-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
