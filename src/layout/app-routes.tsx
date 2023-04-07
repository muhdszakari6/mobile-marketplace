import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Root from "./root";
import Home from "../pages/home";
import ProductPage from "../pages/product-page";
import { AnimatePresence } from "framer-motion";
import NotFound from "../pages/not-found";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Root />}
          children={[
            <Route path="/" element={<Home />} />,
            <Route path="*" element={<NotFound />} />,
          ]}
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AppRoutes;
