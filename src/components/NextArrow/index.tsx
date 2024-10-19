import { FC } from "react";

interface NextArrowProps {
  onClick?: () => void;
}

const NextArrow: FC<NextArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 z-10 flex items-center justify-center w-[72px] h-[72px] bg-primary text-white rounded-full cursor-pointer"
      onClick={onClick}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.998154 19.0152C1.48815 19.5052 2.27815 19.5052 2.76815 19.0152L11.0782 10.7052C11.4682 10.3152 11.4682 9.68518 11.0782 9.29518L2.76815 0.985176C2.27815 0.495176 1.48815 0.495176 0.998154 0.985176C0.508154 1.47518 0.508154 2.26518 0.998154 2.75518L8.23815 10.0052L0.988154 17.2552C0.508154 17.7352 0.508154 18.5352 0.998154 19.0152Z"
          fill="#121212"
        />
      </svg>
    </div>
  );
};

export default NextArrow;
