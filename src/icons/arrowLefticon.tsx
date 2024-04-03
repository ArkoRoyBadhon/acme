import React from "react";

const ArrowLefticon = ({color="#FFF"}:{color?:string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M3.82397 8.71484H13.1573"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.48999 4.04883L13.1567 8.71549L8.48999 13.3822"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLefticon;
