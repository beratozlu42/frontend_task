import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

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
    return <div className="p-6">Products details cannot found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/products" className="text-blue-600 underline">
        <IoMdArrowRoundBack />
      </Link>

      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <img src={product.image} className="w-64 h-64 object-contain" />

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-blue-600 font-bold text-xl">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
