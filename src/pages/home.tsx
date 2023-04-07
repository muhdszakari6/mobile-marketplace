import { motion } from "framer-motion";
import Category from "../components/home/category";
import HomeCarousel from "../components/home/home-carousel";
import Products from "../components/home/products";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.01 }}
    >
      <HomeCarousel />
      <Category />
      <Products />
    </motion.div>
  );
};

export default Home;
