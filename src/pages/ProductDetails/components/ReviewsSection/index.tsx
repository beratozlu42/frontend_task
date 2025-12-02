import { FaRegCircleUser } from "react-icons/fa6";
import RatingStars from "../../../../components/ratingStars/ratingStars";

interface Product {
  review_and_rating: {
    average_rating: number;
    total_reviews: number;
    latest_review_summary: string;
  };
}

interface ProductProps {
  product: Product;
}

export default function index({ product } : ProductProps) {

  return (
    <>
      <div className="container my-10 border border-gray-300 rounded-3xl p-10" id="reviews-section">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
            <h1 className="text-xl text-[#470808] font-semibold">Average rating of this product:</h1>
            <h1 className="text-8xl text-[#470808] font-bold">{product.review_and_rating.average_rating}</h1>
            <div className="flex gap-1">
              <RatingStars rating={product.review_and_rating.average_rating} className="text-4xl" />
            </div>
            <p className="text-gray-500 text-sm">
              Based on {product.review_and_rating.total_reviews} reviews
            </p>
          </div>
          <div className="w-px h-60 bg-gray-300 hidden md:block"></div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="border border-gray-200 rounded-xl p-6 shadow-lg w-full max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <FaRegCircleUser className="text-5xl text-[#470808]" />
                <div>
                  <p className="font-medium text-[#470808]">Random User</p>
                  <p className="text-sm text-gray-500">Latest review</p>
                </div>
              </div>
              <p className="text-[#470808]">
                "{product.review_and_rating.latest_review_summary}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}