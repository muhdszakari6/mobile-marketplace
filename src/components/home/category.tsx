import { BiCategory } from "react-icons/bi";
import { BsAirplane, BsCoin } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

const Category = () => {
  const categories = [
    {
      name: "category",
      icon: <BiCategory />,
    },
    {
      name: "flight",
      icon: <BsAirplane />,
    },
    {
      name: "bill",
      icon: <TbFileInvoice />,
    },
    {
      name: "data plan",
      icon: <TfiWorld />,
    },
    {
      name: "top up",
      icon: <BsCoin />,
    },
  ];
  return (
    <div className="flex flex-col shadow-md py-4 px-4">
      <div className="flex items-start justify-between bg-white overflow-x-scroll">
        {categories.map((category, i) => {
          return (
            <div key={i} className="flex flex-col text-center">
              <div
                key={category.name + i}
                className="flex justify-center text-xl text-gray-500 items-center p-2 rounded-md bg-gray-100 h-10 w-10 mx-auto"
              >
                {category.icon}
              </div>
              <p className="text-xs mt-1 text-gray-400 capitalize">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-start mt-4 mx-auto">
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            className={`${
              i == 0 ? "w-3 bg-black" : "w-1 bg-gray-300"
            } h-1 rounded-full mr-1 transition ease-in`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Category;
