import { Link } from "react-router-dom";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/product/${product.id}`}
      className=" p-4 rounded-lg hover:shadow-lg transition"
    >
      <img src={product.image} className="w-100 h-80 object-contain mx-auto mt-3 mb-3" />

      <div className=" mt-[40px] text-center">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
