"use client"
import ArrowLefticon from "@/icons/arrowLefticon";
import LogoIcon from "@/icons/logoIcon";
import { processorDta } from "@/mock";
import React, { useState } from "react";

const PricingSection = () => {
  const ProductData = [
    {
      price: 4,
      quantity: 1,
      ram: 1,
      disk: 60,
    },
    {
      price: 77,
      quantity: 2,
      ram: 2,
      disk: 60,
    },
    {
      price: 17,
      quantity: 4,
      ram: 4,
      disk: 320,
    },
    {
      price: 47,
      quantity: 8,
      ram: 12,
      disk: 500,
    },
  ];


  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <section>
      <div className="px-[20px] md:px-[40px] pt-[80px]">
        <h4 className="text-[32px] text-bold leading-[32px] text-textBlack2 font-bold tracking-[-0.96px] ml-[-10px]">
          Our Pricing
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-[32px] px-[34px] mt-[20px]">
        <div className="w-full md:w-[625px] ">
          <div className="flex flex-wrap md:flex-nowrap gap-[8px]">
            <button className="text-[14px] font-medium leading-[24px] text-white bg-textBlack2 px-[16px] py-[8px] rounded-[6px]">
              Get 2 months free (switch to yearly)
            </button>
            <button className="text-[14px] font-medium leading-[24px] text-lightGray px-[16px] py-[8px] rounded-[6px] flex gap-[8px] items-center">
              <span>Compare</span>
              <span className="border rounded-full"><ArrowLefticon color="#6B7280" /></span>
            </button>
          </div>
          <div className="mt-[48px] flex flex-col gap-[10px]">
            {ProductData &&
              ProductData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleCardSelect(index)}
                    className={`flex ps-[56px] pe-[30px] h-[65px] justify-between items-center pricingShadow rounded-[8px] pricingShadow  ${selectedCardIndex === index ? "bg-[#f9fbff] border border-lightBlue" : "bg-white"}`}
                  >
                    <div className="w-[109px] ">
                      <span className="text-textBlack2 text-[32px] font-semibold">${item?.price}</span>
                      <span className="text-lightGray text-[14px]">/mo</span>
                    </div>
                    <div className="md:flex gap-[8px] text-[14px] font-medium leading-[150%] hidden ">
                      <p className="min-w-[52px] text-textBlack2 border-r border-lightGray pe-[8px]">
                        {item?.quantity} vCPU
                      </p>
                      <p className="min-w-[52px] text-textBlack2 border-r border-lightGray pe-[8px]">
                        {item?.ram} GB{" "}
                        <span className="text-lightGray">DDR4 RAM</span>
                      </p>
                      <p className="min-w-[52px] text-textBlack2">
                        {item?.disk} GB{" "}
                        <span className="text-lightGray">NVMe Storage</span>
                      </p>
                    </div>
                    <input type="radio" checked={selectedCardIndex === index} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="p-[32px] w-full lg:w-[348px] h-fit bg-white rounded-[12px] pricingDetailShadow">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-textBlack rounded-[8px] custom_shadow customCenter">
              <LogoIcon />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[16px] text-textBlack leading-[16px]">
                acme.com
              </p>
              <p className="text-[12px] font-bold leading-[16px] text-lightGray">
                By acme.com
              </p>
            </div>
          </div>
          <div className="pt-[32px] flex flex-col gap-[6px]">
            {processorDta &&
              processorDta?.map((item) => {
                return (
                  <div key={item?.title} className="relative">
                    <p className="ml-[10px] text-[12px] font-medium leading-[170%] text-textGray">
                      {item?.title}
                    </p>
                    <div className="absolute left-[-10px] top-[5px]">
                      {item?.icon}
                    </div>
                  </div>
                );
              })}
          </div>
          <button className="w-full px-[11px] py-[10px] bg-textBlack2 rounded-[6px] flex justify-center lg:justify-between mt-[24px] pricingShadow items-center">
            <span className="text-white text-[14px] font-medium leading-[20px]">
              Deploy Server
            </span>
            <span className="text-white"><ArrowLefticon /></span>
          </button>
        </div>
      </div>
      <div className="text-center text-lightGray text-[14px] leading-[150%] mt-[13px]">
      *All pricing is in USD and renews automatically unless cancelled. 
      </div>
    </section>
  );
};

export default PricingSection;
