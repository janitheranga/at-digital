import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-col relative font-inter min-h-[512px]">
      <img src="/Hero.png" alt="Hero image" className="w-full" />
      <div className="bg-gradient-to-r to-[#1CBDDD] from-[#4DCA79] lg:w-[630px] lg:min-h-[306px] lg:absolute -bottom-6 md:bottom-14 md:left-[80px] flex flex-col px-[40px] py-[20px] lg:px-10 lg:py-5">
        <h1 className="font-bold text-[36px] md:text-[48px] md:leading-[1] leading-10 lg:text-5xl text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button text="Get free consultation" />
      </div>
    </section>
  );
};

export default Hero;
