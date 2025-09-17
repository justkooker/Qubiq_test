import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import aboutImg_1 from "/src/assets/about-1.webp";
import aboutImg_2 from "/src/assets/about-2.webp";
import aboutImg_3 from "/src/assets/about-3.webp";

const Carousel = () => {
  const items = [
    {
      id: "1",
      image: aboutImg_1,
      title: "Yield Aggregator",
      subtitle: "One-click yield aggregation",
      description:
        "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    },
    {
      id: "2",
      image: aboutImg_2,
      title: "Yield-backed Stablecoin ",
      subtitle: "Unlock liquidity with BYD",
      description:
        "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    },
    {
      id: "3",
      image: aboutImg_3,
      title: "Boost DeFi Liquidity",
      subtitle: "Boost protocols, earn more",
      description:
        "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative pb-10">
      <div className="overflow-x-hidden xl:pr-12" ref={emblaRef}>
        <ul className="flex items-start w-full gap-6">
          {items.map((item) => {
            return (
              <li
                className="flex flex-col md:flex-row justify-between flex-[0_0_100%] xl:flex-[0_0_33.333%] min-w-0"
                key={item.id}
              >
                <div className="md:flex md:flex-col md:justify-end md:gap-4 md:w-full md:max-w-[388px]">
                  <div className="relative w-full px-[66px] md:px-0 xl:px-[66px] mx-auto mb-10 md:mb-0 xl:mb-6">
                    <img
                      className="w-full mx-auto md:mx-0 max-w-[250px] h-full object-contain md:hidden xl:block"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="w-full absolute md:relative xl:absolute -bottom-6 md:bottom-0 md:-bottom-6 left-0 bg-[#F7F7F7] p-3 pl-14 rounded-full">
                      <span className="flex items-center justify-center absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 font-archivo font-semibold text-base text-[#FBFBFC] bg-[#2D322F] rounded-full">
                        {item.id}
                      </span>
                      <h3 className="text-center font-gilroy-semibold font-normal text-xl text-[#303030] bg-[##F4F6F7]">
                        {" "}
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 bg-[#F4F6F7] p-8 md:p-7 rounded-[31px]">
                    <h4 className="font-archivo font-extrabold text-[17px] md:text-lg 2xl:text-xl text-[#2D322F] tracking-[0%]">
                      {item.subtitle}
                    </h4>
                    <p className="font-gilroy-medium font-normal text-sm 2xl:text-base text-[#787878]">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-full hidden md:block xl:hidden md:max-w-[245px] md:aspect-square">
                  <img
                    className="w-full h-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-start mt-5 ml-6 gap-2 xl:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-7 h-1 rounded-full bg-[#5D625F] transition-all duration-300 ${
              index === selectedIndex ? "bg-[#5D625F]" : "bg-[#979797]"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
