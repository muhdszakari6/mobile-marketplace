import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="w-[74%] relative">
      <CiSearch className="absolute top-2.5 left-2 text-gray-400 text-2xl" />
      <input
        type="text"
        className="pl-11 pr-2 py-2 text-base border rounded-md w-full border-gray-400 focus:border-primary-500 focus:outline-none bg-transparent"
        placeholder="Search.."
      />
    </div>
  );
};

export default Search;
