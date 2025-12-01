import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegCircleUser } from "react-icons/fa6";
import RatingStars from "../../components/ratingStars/ratingStars"
import styles from './index.module.css';

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
  image_url_list: string[];
  review_and_rating: {
    average_rating: number;
    total_reviews: number;
    latest_review_summary: string;
  };
  stock_status: {
    status: string;
    delivery_time: string;
  };
  features: {
    name: string;
    value: string;
  }[];
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const totalStars = 5;

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return <div className="p-6 text-center animate-pulse">Loading...</div>;

  return (
    <>
      <div className={`${styles.section} p-6`}>
        <Link to="/products" className="text-red-400 md:text-lg text-md underline flex items-center gap-2">
          <IoMdArrowRoundBack /> Back to Products
        </Link>

        <div className="mt-6 flex flex-col md:flex-row gap-10">
          <div className="w-[100%] mx-auto md:w-1/2">
            <img
              src={product.image_url_list[0]}
              className="w-full h-[100%] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl text-[#470808] font-bold">{product.brand}</h1>
            <h1 className="text-2xl text-[#470808] font-bold">{product.product_name}</h1>

            <a className=""
              onClick={() => {
                const reviewsSection = document.getElementById("reviews-section");
                reviewsSection?.scrollIntoView({ behavior: "smooth" });
              }}>
              <RatingStars rating = {product.review_and_rating.average_rating}/>
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

            <div className="overflow-x-auto my-8">
              <table className="min-w-max w-full rounded-lg ">
                <thead>
                  <tr className="bg-red-100">
                    <th className="px-4 py-3 text-left">Features</th>
                    <th className="px-4 py-3 text-left"></th>
                  </tr>
                </thead>

                <tbody>
                  {product.features?.map((feature, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 font-medium">{feature.name}:</td>
                      <td className="px-4 py-3">{feature.value}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
        <div className="container my-10 border border-gray-300 rounded-3xl p-10" id="reviews-section">
          <div className="flex flex-col md:flex-row gap-14">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
              <h1 className="text-xl text-[#470808] font-semibold">Average rating of this product:</h1>
              <h1 className="text-8xl text-[#470808] font-bold">{product.review_and_rating.average_rating}</h1>
              <div className="flex gap-1">
                <RatingStars rating={product.review_and_rating.average_rating} className="text-4xl"/>
              </div>
              <p className="text-gray-500 text-sm">
                Based on {product.review_and_rating.total_reviews} reviews
              </p>
            </div>
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
                  {product.review_and_rating.latest_review_summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
