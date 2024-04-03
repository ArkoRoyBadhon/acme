import LogoIcon from "@/icons/logoIcon";

const BannerSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full flex justify-center items-center">
        <div className="py-[20px] md:py-[46.36px] px-[20px] md:px-[48px] flex flex-col justify-center items-center">
          <p className="pt-[100px] text-[#666] text-[24px] md:text-[40px] leading-[48px] w-full text-center font-semibold">
            <span className="text-[#171717]">Lorem Ipsum.</span> Testing, testing, <br /> and testing
            on our fast, low latency hardware.
          </p>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-[24px] pb-[95.71px] mt-[32px]">
            <div className="bg-[#09090B] h-[40px] flex justify-center items-center gap-[6px] px-[11px] py-[5.5px] rounded-[6px] font-medium">
              <LogoIcon />
              <span className="text-white">Lorem Ipsum</span>
            </div>
            <div className="border h-[40px] flex justify-center items-center gap-[6px] px-[11px] py-[12px] rounded-[6px] w-[191px] font-medium">
              <span className="">Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
