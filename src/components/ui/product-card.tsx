import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ProductProps {
  photo: string;
  category: string;
  title: string;
  rating: number;
  review: number;
  price: number;
}
const ProductCard = ({
  photo,
  category,
  title,
  rating,
  review,
  price,
}: ProductProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <Link
      to={`/product/${photo.replaceAll(".", "_")}`}
      className="hover:shadow-lg p-2 relative"
    >
      {!liked && (
        <AiOutlineHeart
          onClick={(e) => {
            setLiked(!liked);
            e.preventDefault();
          }}
          className="text-xl absolute top-2.5 right-2.5"
        />
      )}
      {liked && (
        <AiFillHeart
          onClick={(e) => {
            setLiked(!liked);
            e.preventDefault();
          }}
          className="text-xl absolute top-2.5 right-2.5 text-red-500"
        />
      )}
      <img
        className="min-h-[8rem]"
        loading="eager"
        src={`/assets/home/${photo}`}
        alt={title}
      />
      <p className="text-gray-400 text-xs mt-3">{category}</p>
      <h3 className="mt-1 text-black text-sm font-semibold">{title}</h3>
      <div className="flex items-end">
        <div className="mt-2 flex items-center tracking-lg ">
          <AiFillStar className="text-xs text-[#FFA500]" />
          <span className="text-gray-400 text-xs ml-0.5 leading-7">
            {rating}
          </span>
          <span className="text-gray-400 text-xs ml-0.5 leading-7">|</span>
          <span className="text-gray-400 text-xs ml-0.5 leading-7">
            {review}
          </span>
        </div>
        <h3 className="text-sm text-primary-500 font-semibold ml-auto leading-7">
          ${price.toFixed(2)}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
