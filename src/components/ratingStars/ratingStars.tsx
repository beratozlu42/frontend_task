import { LiaStarSolid, LiaStar } from "react-icons/lia";

interface StarRatingProps {
  rating: number;
  total?: number;
  className?: string;
}

export default function StarRating({ rating, total = 5, className = "" }: StarRatingProps) {
  const full = Math.floor(rating);

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: total }).map((_, i) =>
        i < full ? (
          <LiaStarSolid key={i} className="text-yellow-400" />
        ) : (
          <LiaStar key={i} className="text-gray-400" />
        )
      )}
    </div>
  );
}
