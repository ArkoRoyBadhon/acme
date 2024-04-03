import Icon1 from "@/icons/icon1";
import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="p-[20px] md:p-[48px] ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[34px]">
          <h2 className="text-[24px] text-textBlack2 font-semibold leading-[32px]">
            Our Services:
          </h2>
          <div className="flex gap-[16px] flex-wrap">
            
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
