import { motion } from "framer-motion";
import { useParams } from "react-router";
import ProductHeader from "../components/product/product-header";
import { BsCamera } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ProductFooter from "../components/product/product-footer";
import { Tab } from "@headlessui/react";

const categories = ["About Item", "Reviews"];

const container = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      //   delayChildren: 0.25,
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
        {/* <motion.div className="" variants={item}> */}
        <Tab.Group>
          <Tab.List className="flex bg-blue-900/20 p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
        {/* </motion.div> */}
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
