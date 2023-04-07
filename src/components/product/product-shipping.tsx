const ProductShipping = () => {
  return (
    <div className="pb-3 mb-3 border-b border-gray-200">
      <h3 className="text-black-500 text-xs leading-7 capitalize font-semibold">
        Shipping Information:
      </h3>
      {details.map((detail) => (
        <div key={detail.label} className="flex items-center">
          <span className="text-gray-400 text-xs mr-2 leading-7 capitalize">
            {detail.label}:
          </span>
          <span className="text-black-500 text-xs leading-7 capitalize font-semibold">
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductShipping;

const details = [
  { label: "Delivery", value: "Shipping from Jakarta, Indonesia" },
  { label: "Shipping", value: "Free International Shipping" },
  { label: "Arrival", value: "Estimate arrival on 25 - 27 Oct 2027" },
];
