import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { LiaStarSolid } from "react-icons/lia";
import styles from './index.module.css';

interface Product {
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
  }
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

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
      <div className={`${styles.section} p-6 mx-auto my-10`}>
        <Link to="/products" className="text-red-400 md:text-lg text-md underline flex items-center gap-2">
          <IoMdArrowRoundBack /> Back to Products
        </Link>

        <div className="mt-6 flex flex-col md:flex-row gap-10">
          <div className="w-[100%] mx-auto md:w-1/2">
            <img
              src={product.image_url_list[0]}
              className="w-full h-[100%] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-red-400">Category: {product.category}</p>
            {Array.from({
              length: product.review_and_rating.average_rating
            }).map((_, i) => (
              <LiaStarSolid className="inline-block text-yellow-400" />
            ))}
            <h1 className="text-3xl text-[#470808] font-bold mb-5">{product.product_name}</h1>

            <p className="mt-4">{product.description}</p>

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
          </div>
        </div>
      </div>
    </>
  );
}
