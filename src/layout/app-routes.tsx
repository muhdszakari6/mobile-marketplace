import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        index: true,
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
