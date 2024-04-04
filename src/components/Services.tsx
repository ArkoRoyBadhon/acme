import Icon2 from "@/icons/Icon2";
import Icon3 from "@/icons/Icon3";
import Icon4 from "@/icons/Icon4";
import Icon5 from "@/icons/Icon5";
import Icon1 from "@/icons/icon1";
import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="p-[20px] py-[48px] ps-0 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[24px]">
          <h2 className=" text-[24px] text-textBlack2 font-semibold leading-[32px] tracking-[-0.96px]">
            Our Servers:
          </h2>
          <div className="flex gap-[16px] flex-wrap md:flex-nowrap">
            
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon1 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon2 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon3 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon4 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            <button className="p-[10px] bg-white flex items-center gap-[6px] max-w-[529.07px] rounded-[100px] customBtnShadow">
              <Icon5 />
              <span className="text-[14px] font-medium leading-[20px] text-textBlack2">Our Services</span>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
