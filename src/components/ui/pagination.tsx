import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  const pages = [1, 2, 3];
  return (
    <div className="flex items-center">
      <button className="bg-gray-200 text-black shadow-md text-center flex items-center justify-center rounded-full h-5 w-5 mr-4">
        <BsChevronLeft className="text-[0.5rem]" />
      </button>
      {pages.map((page) => (
        <span key={page} className="text-xs mr-4 text-gray-400">{page}</span>
      ))}
      <span className="text-xs mr-4 text-gray-400">....</span>
      <button className="bg-white text-black shadow-md text-center flex items-center justify-center rounded-full h-5 w-5">
        <BsChevronRight className="text-[0.5rem]" />
      </button>
    </div>
  );
};

export default Pagination;
