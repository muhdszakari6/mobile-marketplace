import { PropsWithChildren } from "react";

const NotificationBadge = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute text-white text-center text-[0.5rem] w-[16px] py-[0.05rem] font-medium top-[-4px] right-[-4px] bg-[#ea4c89] rounded-sm">
      {children}
    </div>
  );
};

export default NotificationBadge;
