import { RiHome4Fill } from "react-icons/ri";
import { BsTicketPerforated } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import { TbSettings2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  const menus = [
    {
      label: "Home",
      icon: <RiHome4Fill className="text-xl" />,
      to: "",
    },
    {
      label: "Voucher",
      icon: <BsTicketPerforated className="text-xl" />,
      to: "voucher",
    },
    {
      label: "Wallet",
      icon: <TfiWallet className="text-xl" />,
      to: "wallet",
    },
    {
      label: "Settings",
      icon: <TbSettings2 className="text-xl" />,
      to: "settings",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-4 items-center h-14 flex justify-between shadow-bottom-nav">
      {menus.map((menu, i) => {
        return (
          <NavLink
            to={menu.to}
            key={menu.label + i}
            className={({ isActive }: any) =>
              isActive
                ? "p-2 text-primary-500 flex flex-col items-center"
                : "p-2 text-primary-900 flex flex-col items-center"
            }
          >
            {menu.icon}
            <p className="text-xs mt-1">{menu.label}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
