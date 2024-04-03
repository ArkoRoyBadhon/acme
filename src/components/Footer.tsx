import React from "react";

const Footersection = () => {
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-[58px]">
        <div className="w-full md:w-[605px] px-[20px]  md:p-[48px]">
          <p className="text-lightGray text-[16px] md:text-[24px] font-semibold">
            <span className="text-textBlack2">ready to profit?</span>
            Start journaling your trades.
          </p>
          <p className="text-lightGray text-[16px] md:text-[24px] font-semibold">
            Check out <span className="text-textGray">VPS Lite</span> or{" "}
            <span className="text-lightBlue">VPS Pro</span> or{" "}
            <span className="text-lightViolet">VPS MAX</span>
          </p>

          <div className="flex gap-[16px]">
            <button className="w-fit px-[11px] py-[10px] bg-textBlack2 rounded-[6px] flex justify-between mt-[24px] pricingShadow items-center">
              <span className="text-white text-[14px] font-medium leading-[20px]">
                Deploy Now
              </span>
            </button>
            <button className="w-fit px-[11px] py-[10px] bg-white rounded-[6px] flex justify-between mt-[24px] pricingShadow items-center">
              <span className="text-textBlack2 text-[14px] font-medium leading-[20px]">
                View Dedicated Server
              </span>
            </button>
          </div>
        </div>
        <div className="w-[358.66px] p-[48px]">
          <p className="text-textGray text-[16px] leading-[24px] font-normal mb-[24px]">
            <span className="text-textBlack2">Trial acme</span>
            to see how our performance and ease of use through our Control
            Panel.
          </p>
          <button className="w-fit px-[11px] py-[10px] bg-white rounded-[6px] flex justify-between mt-[24px] pricingShadow items-center">
              <span className="text-textBlack2 text-[14px] font-medium leading-[20px]">
                Money Back Gauraunttee
              </span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Footersection;
