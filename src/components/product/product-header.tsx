import { BsChevronLeft, BsShare, BsBagDash } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import NotificationBadge from "../ui/notification-badge";

const ProductHeader = () => {
  return (
    <div className="z-10 bg-white px-4 items-center h-16 flex justify-between">
      <BsChevronLeft />
      <div className="flex items-center justify-between">
        <span className="relative mr-4">
          <AiFillHeart className="text-xl text-red-500" />
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
