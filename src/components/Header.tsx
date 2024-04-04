import LogoIcon from "@/icons/logoIcon";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const HeaderSection = () => {
  const navLinks = [
    {
      title: "Pricing",
      link: "/",
    },
    {
      title: "Compatibility",
      link: "/",
    },
    {
      title: "Features",
      link: "/",
    },
    {
      title: "FAQ",
      link: "/",
    },
    {
      title: "Support",
      link: "/",
    },
  ];

  return (
    <header>
      <div className="flex w-full flex-col ">
        <div className="bg-textBlack2 h-[40px] flex justify-center items-center text-white gap-[105px]">
          <p className="text-[14px] font-[400] ps-[92px]">Restocked Today</p>
          <div className="center gap-[5px] px-[12px] border-l-[1px] border-[#3a3a3c]">
            <p className="text-[14px] font-[400]">Read more</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[89px] px-[71px] py-[4px] pb-[10px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[32px] h-[32px] bg-textBlack rounded-[8px] custom_shadow customCenter">
            <LogoIcon />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[16px] text-textBlack leading-[16px]">
              acme.com
            </p>
            <p className="text-[12px] font-bold leading-[16px] text-lightGray mt-[2.75px]">
              By acme.com
            </p>
          </div>
        </div>
        <nav className="flex w-full justify-between items-center">
          <ul className="md:flex gap-[24px] hidden">
            {navLinks &&
              navLinks?.map((link) => {
                return (
                  <li key={link?.title}>
                    <Link
                      className="text-[14px] leading-[20px] font-normal flex items-center"
                      href="/"
                    >
                      {link?.title}
                      
                        <div className={`${link?.title === "Pricing" ? "" : "hidden" } `}>
                          <IoIosArrowDown color="#171717" />
                        </div>
                      
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="flex text-[13.672px] font-normal leading-[14px]">
            <button className="p-[8.4px]">Login</button>
            <button className="px-[13px] py-[10.3px] border rounded-[5px] flex items-center gap-[10px]">
              <span className="">Start Now</span>
              <div className="bg-[#09090B] lg:flex items-center gap-[6px] px-[11px] py-[5.5px] rounded-[6px] hidden">
                <LogoIcon />
                <span className="text-white">Lorem Ipsum</span>
              </div>
            </button>
            <button className="p-[8.4px] md:hidden">
              <FaBars />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
