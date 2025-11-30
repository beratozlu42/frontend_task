import { Link } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";

interface Product {
  product_id: string;
  product_name: string;
  category: string;
  price_info: {
    price: number;
    discounted_price: number;
  };
  image_url_list: string[];
  review_and_rating: {
    average_rating: number;
  }
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.product_id}`}
      className="p-4 rounded-lg hover:shadow-lg transition"
    >
      <img
        src={product.image_url_list[0]}
        className="w-full h-64 object-contain mx-auto mb-3"
      />

      <div>
        <h2 className="text-[#470808] font-semibold text-lg">
          {product.product_name}
        </h2>

        <p className="text-gray-500">Category: {product.category}</p>

        {Array.from({
          length: product.review_and_rating.average_rating
        }).map((_, i) => (
          <LiaStarSolid className="inline-block text-yellow-400" />
        ))}

        <p className="text-red-400 font-bold mt-4">
          €{product.price_info.discounted_price ?? product.price_info.price}
        </p>
      </div>
    </Link>
  );
}

