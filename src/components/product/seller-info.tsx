import { AiOutlineFolderView } from "react-icons/ai";

const SellerInfo = () => {
  return (
    <div className="border-b border-gray-200 pb-4 items-end mb-1">
      <h3 className="text-black-500 text-xs leading-7 mb-2 capitalize font-semibold">
        Seller Information
      </h3>
      <div className="flex items-center">
        <img
          loading="eager"
          src={`/assets/product-page/product-sm.jpeg`}
          className="rounded-full h-16 mr-6"
        />
        <div>
          <h3 className="text-black-500 text-lg leading-7 capitalize font-semibold">
            Kyojin Shop
          </h3>
          <p className="mb-2 text-xs text-gray-400">
            We sell the best fighting gears
          </p>
          <button className="px-4 py-2 bg-transparent border flex items-center rounded-md border-gray-400 text-xs text-primary-500 ">
            <AiOutlineFolderView className="mr-2 text-lg" />
            View Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
