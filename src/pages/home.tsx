import Category from "../components/home/category";
import HomeCarousel from "../components/home/home-carousel";
import Products from "../components/home/products";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Category />
      <Products/>
    </>
  );
};

export default Home;
