import ProductDescription from "./product-description";
import ProductShipping from "./product-shipping";

const properties = [
  { label: "Brand", value: "Puma" },
  { label: "Color", value: "Beige" },
  { label: "Category", value: "Casual Shirt" },
  { label: "Material", value: "Polyester" },
  { label: "Condition", value: "New" },
  { label: "Weight", value: "200g" },
];
const ProductAbout = () => {
  return (
    <>
      <div className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-200">
        {properties.map((property) => (
          <div key={property.label} className="flex items-center">
            <span className="text-gray-400 text-xs mr-2 leading-7 capitalize">
              {property.label}:
            </span>
            <span className="text-black-500 text-xs leading-7 capitalize font-semibold">
              {property.value}
            </span>
          </div>
        ))}
      </div>
      <ProductDescription />
      <ProductShipping />
    </>
  );
};

export default ProductAbout;
