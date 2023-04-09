import { BsBagDash } from "react-icons/bs";

const ProductFooter = () => {
  return (
    <>
      <div className="z-10 bg-white px-4 items-center h-16 flex justify-between shadow-bottom-nav">
        <div className="mb-3">
          <span className="text-gray-400 text-xs ml-0.5 capitalize">
            Total Price
          </span>
          <h3 className="text-lg text-primary-500 font-semibold ml-auto">
            ${(18).toFixed(2)}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <button className="rounded-l-md text-white text-xs px-2 py-3 bg-primary-500 flex items-center">
            <BsBagDash className="text-sm mr-1" />
            <span>1</span>
          </button>
          <button className="rounded-r-md text-white text-xs px-5 py-3 bg-primary-950">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFooter;
