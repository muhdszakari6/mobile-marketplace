import { PropsWithChildren } from "react";

const Chip = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-[0.5rem] whitespace-nowrap mt-2 rounded-full py-1 px-2 border border-primary-500 text-primary-500 bg-primary-50 mr-2">
      {children}
    </span>
  );
};

export default Chip;
