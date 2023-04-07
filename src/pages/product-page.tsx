import { motion } from "framer-motion";
import { useParams } from "react-router";
import ProductHeader from "../components/product/product-header";
import { BsCamera } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ProductFooter from "../components/product/product-footer";
import { Tab } from "@headlessui/react";
import ProductAbout from "../components/product/product-about";
import Reccomendation from "../components/product/recommended-products";

const categories = [
  { name: "About Item", panel: <ProductAbout /> },
  { name: "Reviews", panel: null },
];

const container = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.05,
    },
  },
  remove: {
    y: "50%",
    transition: {
      duration: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
  remove: {
    opacity: 0,
    y: "50%",
  },
};

const ProductPage = () => {
  let { id } = useParams();
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="remove"
    >
      <motion.div className="fixed z-10 top-0 left-0 right-0" variants={item}>
        <ProductHeader />
      </motion.div>
      <div className="pt-16 pb-14 px-4">
        <motion.div className="z-0  relative" variants={item}>
          <div className="absolute top-4 left-4">
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div className="block mb-3" key={i} variants={item}>
                <img
                  loading="lazy"
                  src={`/assets/product-page/product-sm.jpeg`}
                  alt={id}
                  className="h-8 rounded-md"
                />
              </motion.div>
            ))}
          </div>
          <img
            loading="lazy"
            src={`/assets/product-page/product.webp`}
            alt={id}
            className="rounded-md"
          />
        </motion.div>
        <motion.div variants={item} className="flex mt-3 mb-2 items-center ">
          <BsCamera className="text-gray-400 text-xs mr-2" />
          <p className="text-gray-400 text-xs">salim.id</p>
        </motion.div>
        <motion.h2 variants={item} className="font-semibold text-base">
          Essensial Men's Short-Sleeve T-shirt
        </motion.h2>
        <motion.div
          variants={item}
          className="flex items-center tracking-lg mt-1"
        >
          <AiFillStar className="text-xs text-[#FFA500]" />
          <span className="text-gray-400 text-xs ml-0.5 leading-7 capitalize">
            4.6 ratings
          </span>
          <span className="bg-gray-400 h-1 w-1 rounded-full text-xs mx-3 leading-7"></span>
          <span className="text-gray-400 text-xs ml-0.5 leading-7 capitalize">
            2.3k reviews
          </span>
          <span className="bg-gray-400 h-1 w-1 rounded-full text-xs mx-3 leading-7"></span>
          <span className="text-gray-400 text-xs ml-0.5 leading-7 capitalize">
            2.3k sold
          </span>
        </motion.div>
        <motion.div variants={item}>
          <Tab.Group>
            <Tab.List className="flex  border-b border-gray-200 mt-3 mb-3">
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    selected
                      ? "text-primary-500 border-b border-primary-500 pb-1 text-xs font-semibold flex-1 outline-none"
                      : "text-gray-400 text-xs pb-1 outline-none flex-1"
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {categories.map((category) => (
                <Tab.Panel key={category.name}>{category.panel}</Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
        <motion.div variants={item}>
          <Reccomendation />
        </motion.div>
      </div>
      <motion.div
        className="fixed z-10 bottom-0 left-0 right-0"
        variants={item}
      >
        <ProductFooter />
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;
