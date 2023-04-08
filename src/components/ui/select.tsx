import { BsChevronDown } from "react-icons/bs";
interface SelectProp {
  options: string[];
}
const Select = ({ options }: SelectProp) => {
  return (
    <div className="w-full relative">
      <BsChevronDown className="absolute top-3 right-2 text-gray-400 text-xs" />
      <select
        className="pr-2 pl-2 appearance-none py-2 text-xs border rounded-md w-full border-gray-400 focus:border-primary-500 focus:outline-none bg-transparent"
        placeholder="Select Category"
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
