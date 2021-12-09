import { FC } from "react";

interface Icon {
  color: string;
}

const ChevronRight: FC<Icon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      aria-labelledby="chevronRightIconTitle"
      stroke={props.color}
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      color="#2329D6"
    >
      {" "}
      <title id="chevronRightIconTitle">Chevron Right</title> <polyline points="10 6 16 12 10 18 10 18" />{" "}
    </svg>
  );
};

export default ChevronRight;
