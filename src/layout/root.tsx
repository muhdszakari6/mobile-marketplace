import { Outlet } from "react-router";
import BottomNavigation from "./bottom-navigation";
import Header from "./header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="mt-16 mb-14">
        <Outlet />
      </div>
      <BottomNavigation />
    </>
  );
};

export default Root;
