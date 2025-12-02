import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import RatingStars from "../../../../components/ratingStars/ratingStars"

interface Product {
  brand: string;
  product_id: string;
  product_name: string;
  category: string;
  price_info: {
    price: number;
    discounted_price: number;
    discount_rate: number;
  };
  description: string;
  review_and_rating: {
    average_rating: number;
    total_reviews: number;
  };
  stock_status: {
    status: string;
    delivery_time: string;
  };
}

interface ProductProps {
  product: Product;
}

export default function HeaderSection({ product }: ProductProps) {
  return (
    <>
      <h1 className="text-3xl text-[#470808] font-bold">{product.brand}</h1>
      <h1 className="text-2xl text-[#470808] font-bold">{product.product_name}</h1>

      <a className=""
        onClick={() => {
          const reviewsSection = document.getElementById("reviews-section");
          reviewsSection?.scrollIntoView({ behavior: "smooth" });
        }}>
        <RatingStars rating={product.review_and_rating.average_rating} />
        <p className="text-sm text-gray-400">{product.review_and_rating.total_reviews} reviews</p>
      </a>

      <div className="text-red-400 font-bold text-4xl my-5">
        €{product.price_info.discounted_price ?? product.price_info.price}{" "}
        {product.price_info.discounted_price && (
          <>
            <span className="text-white text-4xl bg-red-400 p-1 ml-2">
              -{product.price_info.discount_rate}%
            </span><br />
            <span className="text-lg text-gray-400 line-through">
              €{product.price_info.price}
            </span>
          </>
        )}
      </div>
      <button
        className="justify-center w-full py-3 md:text-lg md:px-20 md:py-2 bg-red-400 text-white rounded hover:bg-red-300 flex gap-3">
        <TiShoppingCart className="text-2xl my-ao" />
        Add to cart!
      </button>

      <hr className="border-gray-300 mt-10 mb-4" />

      <p className="">{product.description}</p>
      <p className="mt-3">Delivery time: <span className="font-bold">{product.stock_status.delivery_time}</span></p>
    </>
  )
}
