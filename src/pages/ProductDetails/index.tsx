import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from './index.module.css'

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return <div className="p-6 text-center align-center animate-pulse">Loading</div>;

  return (
    <div className={`${styles.section} p-6 mx-auto my-10`}>
      <Link to="/products" className="text-red-400 underline">
        <IoMdArrowRoundBack />
      </Link>

      <div className="mt-6 flex flex-col md:flex-row gap-10">
        <div className="w-[60%] mx-auto md:w-1/2">
          <img src={product.image} className="w-[100%] h-[50%] object-contain" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-red-400 font-bold text-xl">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
