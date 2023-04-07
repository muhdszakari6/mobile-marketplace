import ProductCard from "../ui/product-card";

const Reccomendation = () => {
  return (
    <>
      <div className="flex justify-between z-10  pt-3 pb-2 items-end mb-1 sticky top-[calc(4rem-1px)]">
        <h2 className="text-base font-bold text-black capitalize">
          Reccomendation
        </h2>
        <a href="#" className="text-sm text-primary-500 leading-7">
          See more
        </a>
      </div>
      <div className="grid grid-cols-2">
        {products.map((product) => (
          <ProductCard
            photo={product.photo}
            category={product.category}
            key={product.id}
            title={product.name}
            rating={product.rating}
            review={product.reviews}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Reccomendation;

const products = [
  {
    id: 1,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-one.webp",
  },
  {
    id: 2,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-two.jpeg",
  },
];
