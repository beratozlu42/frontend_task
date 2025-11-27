import { Link } from "react-router-dom";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
    </Link>
  );
}
