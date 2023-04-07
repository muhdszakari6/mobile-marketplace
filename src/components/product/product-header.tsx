import { BsChevronLeft, BsShare, BsBagDash } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import NotificationBadge from "../ui/notification-badge";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductHeader = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="z-10 bg-white px-4 items-center h-16 flex justify-between">
      <Link to={"/"}>
        <BsChevronLeft />
      </Link>

      <div className="flex items-center justify-between">
        <span className="relative mr-4">
          {!liked && (
            <AiOutlineHeart
              onClick={() => setLiked(!liked)}
              className="text-xl"
            />
          )}
          {liked && (
            <AiFillHeart
              onClick={() => setLiked(!liked)}
              className="text-xl text-red-500"
            />
          )}
        </span>
        <span className="relative mr-4">
          <BsShare className="text-xl" />
        </span>
        <span className="relative">
          <NotificationBadge>1</NotificationBadge>
          <BsBagDash className="text-xl" />
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
