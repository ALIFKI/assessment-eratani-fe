import { FC } from "react";

export interface CardSectionProps {
  children?: React.ReactNode;
  title: string;
  text: string;
  iconName: string;
}

const CardSection: FC<CardSectionProps> = ({ text, iconName, title }) => {
  return (
    <div className="flex bg-[#F3F3F3] w-full py-3 px-24 mt-2 shadow-sm">
      <div className="h-[179px] max-w-[300px]">
        <img
          className="h-[179px] max-w-[300px] object-cover"
          src={"/logo/" + iconName + ".png"}
          alt="fund"
        />
      </div>
      <div className="flex flex-col ml-8 justify-between py-5">
        <div className="font-lato font-bold text-[35px] leading-[48px] text-secondary">
          {title}
        </div>
        <p className="w-full font-lato text-[23px] leading-[30px] md:mt-4 tracking-[1.5px] text-justify">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardSection;
