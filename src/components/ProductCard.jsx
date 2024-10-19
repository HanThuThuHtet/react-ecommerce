import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  
  return (
    <Link to={`/product-details/${id}`} className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40 " alt={title} />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p>{price}</p>
        {
          carts.find((cart) => cart.product.id === id) ? (
            <button className="border text-sm px-3 py-1 border-black bg-black text-white">
              Added
            </button>
          ) : (
            <button className="border text-sm px-3 py-1 border-black">
              Add to Cart
            </button>
          )
        }
      </div>
    </Link>
  );
};

export default ProductCard;
