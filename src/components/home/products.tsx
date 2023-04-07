import ProductCard from "../ui/product-card";

const Products = () => {
  return (
    <div className="py-4 px-4 bg-gray-50">
      <div className="flex justify-between z-10 bg-gray-50 pt-3 pb-2 items-end mb-1 sticky top-[calc(4rem-1px)]">
        <h2 className="text-base font-bold text-black capitalize">
          Best Sale Product
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
    </div>
  );
};

export default Products;

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
  {
    id: 3,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-three.webp",
  },
  {
    id: 4,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-four.webp",
  },
  {
    id: 5,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-five.webp",
  },
  {
    id: 6,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-six.webp",
  },
  {
    id: 7,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-one.webp",
  },
  {
    id: 8,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-two.jpeg",
  },
  {
    id: 9,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-three.webp",
  },
  {
    id: 10,
    name: "Essensial Men's Short-Sleeve T-shirt",
    category: "Shirt",
    rating: 4.6,
    reviews: 2345,
    price: 12,
    photo: "product-four.webp",
  },
];
