import { FC, ReactNode } from "react";

export interface HeaderSectionProps {
  text: string | ReactNode;
}
const HeaderSection: FC<HeaderSectionProps> = ({ text }) => {
  return (
    <div className="text-xl text-center font-lato text-secondary w-full justify-center">
      <span className="font-[600] text-[50px] leading-[60px] text-center tracking-[1.5px]">
        {text}
      </span>
    </div>
  );
};

export default HeaderSection;
