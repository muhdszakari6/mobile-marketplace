import { Outlet } from "react-router";
import BottomNavigation from "./bottom-navigation";
import Header from "./header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="pb-14">
        <Outlet />
      </div>
      <BottomNavigation />
    </>
  );
};

export default Root;
