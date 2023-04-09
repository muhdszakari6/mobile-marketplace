import { BsStarFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import Chip from "../ui/chip";
interface Review {
  name: string;
  rating: string;
}
interface ReviewProps {
  review: Review;
}
const ReviewItem = ({ review }: ReviewProps) => {
  return (
    <div className="pb-3 pt-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            loading="eager"
            src={`/assets/product-page/user.webp`}
            className="rounded-full h-6 mr-2"
          />
          <h3 className="text-black-500 text-xs leading-7 capitalize font-semibold">
            {review.name}
          </h3>
        </div>
        <div className="flex items-center">
          <BsStarFill className="text-xs text-[#FFA500] mr-1" />
          <h3 className="text-black-500 text-xs mr-3 leading-7 capitalize font-semibold">
            {review.rating}
          </h3>
          <FiMoreHorizontal className="text-xs text-gray-400 mr-1" />
        </div>
      </div>
      <div className="flex items-center flex-wrap">
        <Chip>Legit Seller</Chip>
        <Chip>Very Good Product</Chip>
        <Chip>Excellent Service</Chip>
      </div>
      <p className="my-4 text-xs text-gray-500">
        According to my expectation, this is the best. Arigatou gozaimasu
      </p>
      <div className="my-2 flex items-center">
        <div className="flex items-end text-xs text-primary-500">
          <BsFillHandThumbsUpFill className="inline mr-2 mb-[3px]" />
          <p>Helpful?</p>
        </div>
        <span className="text-gray-400 text-xs ml-auto">Yesterday</span>
      </div>
    </div>
  );
};

export default ReviewItem;
