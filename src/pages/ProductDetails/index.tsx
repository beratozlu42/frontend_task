import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { LiaStarSolid, LiaStar } from "react-icons/lia";
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
      <div className={`${styles.section} p-6 mx-auto`}>
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

            {Array.from({ length: totalStars }).map((_, i) => (
              i < Math.floor(Number(product.review_and_rating.average_rating)) ? (
                <LiaStarSolid key={i} className="inline-block text-yellow-400" />
              ) : (
                <LiaStar key={i} className="inline-block text-gray-400" />
              )
            ))}

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

            <div className="overflow-x-auto my-10">
              <table className="min-w-max w-full rounded-lg">
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


      </div>
    </>
  );
}
