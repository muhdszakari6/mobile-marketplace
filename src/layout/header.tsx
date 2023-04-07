import Search from "../components/ui/search";
import { BsBagDash } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import NotificationBadge from "../components/ui/notification-badge";
import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef<HTMLDivElement>(null);
  const listenScrollEvent = () => {
    if (window.scrollY > 30) {
      header.current?.classList.add("bg-white");
      header.current?.classList.add("shadow-sm");
    } else {
      header.current?.classList.remove("bg-white");
      header.current?.classList.remove("shadow-sm");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      ref={header}
      className="z-10 fixed top-0 left-0 right-0 bg-transparent px-4 items-center h-16 flex justify-between transition ease-in"
    >
      <Search />
      <div className="flex items-center justify-between">
        <span className="relative mr-3">
          <NotificationBadge>1</NotificationBadge>
          <BsBagDash className="text-xl" />
        </span>
        <span className="relative">
          <NotificationBadge>9+</NotificationBadge>
          <BsChatText className="text-xl " />
        </span>
      </div>
    </div>
  );
};

export default Header;
