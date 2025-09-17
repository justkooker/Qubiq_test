import React from "react";

import heroImage from "../assets/logo.svg";
import arrowRight from "../assets/arrow-right.svg";
const Hero = () => {
  return (
    <section className="mb-[67px] md:mb-[119px] 2xl:mb-[146px] xl:pb-[25.5px]">
      <div className="flex items-start w-full xl:justify-between">
        <div className=" w-full md:max-w-[520px] 2xl:max-w-[1027px] xl:max-w-[780px] 2xl:py-6">
          <h1 className="font-archivo font-semibold text-[58px] md:text-[48px] xl:text-[72px] 2xl:text-[90px] text-[#303030] leading-[110%] mb-4">
            The yield-backed stablecoin protocol boosting{" "}
            <span className="inline-block">
              DeFi
              <img
                src={heroImage}
                alt="hero image"
                className="h-[1.2em] w-auto inline-block align-middle mx-3 md:hidden"
              />
            </span>
            liquidity
          </h1>
          <h3 className="font-gilroy-semibold font-normal  text-xl md:text-base 2xl:text-2xl text-[#26262655] leading-[140%] md:leading-[100%] mb-10 md:mb-8 xl:mb-[70px]">
            Keep your yield working for you — we keep your liquidity accessible
          </h3>
          <div className="flex items-center gap-5">
            <a
              className="font-archivo text-base font-semibold leading-[140%] whitespace-nowrap py-4 px-7 md:px-[117px] bg-[#2D2D2D] text-[#F7F7F7] backdrop-blur-[4px] rounded-full"
              href=""
            >
              Join Whitelist
            </a>
            <a
              className="font-archivo text-base font-semibold leading-[140%] whitespace-nowrap py-4 px-6 md:px-[62px] bg-[#E6E8EC] text-[#2E2E2E] backdrop-blur-[4px] rounded-full"
              href=""
            >
              <span className="hidden md:block">Read Docs</span>
              <span className="block md:hidden flex items-center gap-2">
                Learn more <img src={arrowRight} alt="arrow right" />
              </span>
            </a>
          </div>
        </div>
        <div className="md:max-w-[152px] xl:max-w-[212px] 2xl:max-w-[331px] w-full h-full md:p-0 2xl:px-[45px] 2xl:py-[34px] hidden md:block md:aspect-square">
          <img
            className="w-full h-full object-contain"
            src={heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
