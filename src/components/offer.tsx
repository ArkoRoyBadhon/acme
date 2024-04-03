import React from "react";

const Offer = () => {
  return (
    <div className="flex w-full justify-center items-center gap-[12px] h-fit md:h-[44px] py-[10px]">
      <div className="flex items-center rounded-2xl h-[24px] px-[10px] text-[12px] font-medium capitalize text-[#067A6E] bg-[#D4F7F0]">🎉 New</div>
      <p className="text-[13.67px] leading-[24px] font-medium text-textBlack hidden md:block">Get 2 months free with annual plans!</p>
      <button className="rounded-[100px] text-center bg-white px-[12px] py-[5px] text-[14px] h-[32px] font-medium">
        Claim Promotion
      </button>
    </div>
  );
};

export default Offer;
