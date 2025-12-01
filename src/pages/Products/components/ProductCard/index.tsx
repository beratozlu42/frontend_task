import { Link } from "react-router-dom";
import RatingStars from "../../../../components/ratingStars/ratingStars"
import index from "../../../Home";

interface Product {
  brand: string;
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
  const totalStars = 5;

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
        <span className="text-[#470808] font-bold text-xl ">{product.brand}</span><br />
        <span className="text-[#470808] font-semibold text-lg">
          {product.product_name}
        </span>

        <p className="text-gray-500">Category: {product.category}</p>

        { /* turning ratings into stars */ }
        <RatingStars rating={product.review_and_rating.average_rating} />

        <p className="text-red-400 font-bold mt-4">
          €{product.price_info.discounted_price ?? product.price_info.price}
          {product.price_info.discounted_price && (
            <>
              <span className="text-gray-400 font-light line-through ml-2">
                €{product.price_info.price}
              </span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}

