import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import ImageSection from "./components/ImageSection";
import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import ReviewsSection from "./components/ReviewsSection"
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
  const [mainImage, setMainImage] = useState<string>(""); // For the image buttons

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.image_url_list[0]);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return <div className="p-6 text-center animate-pulse">Loading...</div>;

  return (
    <>
      <div className={`${styles.section} p-6`}>
        <Link to="/" className="text-red-400 md:text-lg text-md underline flex items-center gap-2">
          <IoMdArrowRoundBack /> Back to Products
        </Link>
        <div className="mt-6 flex flex-col md:flex-row gap-10">
          <div className="w-[100%] mx-auto md:w-1/2">
            <ImageSection image_url_list={product.image_url_list} />
          </div>
          <div className="w-full md:w-1/2">
            <HeaderSection product={product}/>
            <FeaturesSection product={product} />
          </div>
        </div>
        <ReviewsSection product={product} />
      </div>
    </>
  );
}
