import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const ProductDescription = () => {
  const [see_more, setsee_more] = useState(true);
  return (
    <div className="pb-3 mb-3 border-b border-gray-200">
      <h3 className="text-black-500 text-xs leading-7 capitalize font-semibold">
        Description
      </h3>
      <ul className="mt-1 list-disc pl-5">
        {see_more &&
          descs.map((desc) => (
            <li className="text-gray-400 text-xs leading-5" key={desc}>
              {desc}
            </li>
          ))}
        {!see_more &&
          descs.slice(0, 2).map((desc) => (
            <li className="text-gray-400 text-xs leading-5" key={desc}>
              {desc}
            </li>
          ))}
      </ul>
      <span className="text-gray-400 text-xs leading-5 block my-3">
        Chat us if there is anything you need to ask about the product
      </span>
      {see_more && (
        <span
          onClick={() => setsee_more(false)}
          className="text-primary-500 text-xs flex items-center"
        >
          See less <BsChevronUp className="ml-2" />
        </span>
      )}
      {!see_more && (
        <span
          onClick={() => setsee_more(true)}
          className="text-primary-500 text-xs flex items-center"
        >
          See more <BsChevronDown className="ml-2" />
        </span>
      )}
    </div>
  );
};

export default ProductDescription;

const descs = [
  "Long sleeve dress shirt in class-fit featuring drop down button collar.",
  "Patch pocket on left chest.",
  "Durable combination cotton fabric.",
  "Comfortable and quality dress shirt.",
  "Go to classic button down shirt for classic ocations.",
];
