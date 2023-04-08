import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductReviews = () => {
  const rating = 2.5;
  const halfStar = rating % 1;
  const fullStars = Array.from(Array(Math.floor(rating)).keys());
  const emptyStars = Array.from(Array(Math.floor(5 - rating)).keys());

  return (
    <div className="pb-3 mb-3 border-b border-gray-200">
      <h3 className="text-black-500 text-xs leading-7 capitalize font-semibold">
        Review & Ratings
      </h3>
      <div className="flex">
        <div className="mr-6 flex flex-col">
          <div className="flex items-end my-2">
            <h2 className="text-3xl font-semibold mr-1 inline-block leading-6">
              4.9
            </h2>
            <p className="inline-block text-xs text-gray-400 mr-0.5">/</p>
            <p className="inline-block text-xs text-gray-400">5.0</p>
          </div>
          <div className="flex my-2.5">
            {fullStars.map((_, i) => (
              <BsStarFill
                key={i}
                className="text-xs mr-[0.1rem] text-[#FFA500]"
              />
            ))}
            {halfStar && (
              <BsStarHalf className="text-xs mr-[0.1rem] text-[#FFA500]" />
            )}
            {emptyStars.map((_, i) => (
              <BsStar key={i} className="text-xs mr-[0.1rem] text-gray-400" />
            ))}
          </div>
          <span className="text-gray-400 text-xs leading-7 mt-auto">
            2.5k reviews
          </span>
        </div>
        <div className="flex-1">
          {reviewsSummary.map((review) => (
            <div key={review.star} className="flex items-center mb-1.5">
              <BsStarFill className="text-xs text-[#FFA500] mr-1" />
              <span className="text-gray-400 text-xs mr-1">{review.star}</span>
              <div className="w-[70%] flex items-center">
                <div
                  className={`p-1 rounded-l-lg bg-primary-500`}
                  style={{
                    width: percentage(review.value, totalReviews) + "%",
                  }}
                ></div>
                <div
                  className={`p-1 rounded-r-lg bg-gray-200`}
                  style={{
                    width:
                      percentage(totalReviews - review.value, totalReviews) +
                      "%",
                  }}
                ></div>
              </div>
              <span className="text-black text-xs ml-1">{review.value}</span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-black-500 text-xs leading-7 my-2 capitalize font-semibold">
        Review with images & videos
      </h3>

      <div className="grid gap-4 grid-cols-4 items-center mb-3 justify-between">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            className={`block relative ${i == 3 ? "brightness-50" : ""} `}
            key={i}
          >
            <img
              loading="eager"
              src={`/assets/product-page/product-sm.jpeg`}
              className="rounded-md"
            />
            {i == 3 && (
              <span className="font-lg flex items-center justify-center text-center absolute top-0 left-0 bottom-0 right-0">
                <p>132+</p>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;

const percentage = (partialValue: number, totalValue: number) => {
  let percentage = (100 * partialValue) / totalValue;
  return percentage || 0 ? percentage.toFixed(2) : 0;
};

const reviewsSummary = [
  { value: 60, star: 5 },
  { value: 20, star: 4 },
  { value: 10, star: 3 },
  { value: 5, star: 2 },
  { value: 5, star: 1 },
];

const totalReviews = 100;
