import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./root";
import Home from "../pages/home";
import ProductPage from "../pages/product-page";
import { AnimatePresence } from "framer-motion";
import NotFound from "../pages/not-found";
import { useScrollToTop } from "../components/ui/scroll-to-top";

const AppRoutes = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Root />}
          children={[
            <Route path="/" key="home" element={<Home />} />,
            <Route path="*" key="*" element={<NotFound />} />,
          ]}
        />
        <Route path="/product/:id" key="product" element={<ProductPage />} />
        <Route path="*" key="**" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AppRoutes;
