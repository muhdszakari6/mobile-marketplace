import { motion } from "framer-motion";
import { useParams } from "react-router";
import ProductHeader from "../components/product/product-header";

const container = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      delayChildren: 0.5,
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
  exit: {
    y: "100%",
  },
};
const item = {
  hidden: { opacity: 0.5, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProductPage = () => {
  let { id } = useParams();
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="h-screen"
    >
      <motion.div className="fixed top-0 left-0 right-0" variants={item}>
        <ProductHeader />
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;
