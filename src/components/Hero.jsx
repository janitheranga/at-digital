import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex h-[512px] md:h-[706px] relative font-inter">
      <img src="/Hero.png" alt="Hero image" className="bg-no-repeat bg-cover lg:h-[763px] md:h-[448px] h-[218px]" />
      <div className="bg-gradient-to-r to-[#1CBDDD] from-[#4DCA79] lg:w-[630px] absolute -bottom-6 md:bottom-1 lg:left-[80px] lg:top-[354px] flex flex-col px-[40px] py-[20px] lg:px-10 lg:py-5">
        <h1 className="font-bold text-[36px] md:text-[48px] md:leading-[1] leading-10 lg:text-5xl text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button text="Get free consultation" />
      </div>
    </section>
  );
};

export default Hero;
