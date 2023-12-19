import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <section className="font-inter px-[40px] py-20 flex flex-col">
      <div className="flex md:flex-row flex-col justify-between md:w-[688px] lg:w-[996px] xl:w-[1064px] mx-auto">
        <img
          src="/image-2.png"
          alt="Web & Mobile App Development"
          className="md:h-[276px] lg:h-[414px]"
        />
        <div className="lg:w-[530px] flex flex-col md:justify-center text-center md:w-[393px] md:text-left">
          <h2 className="text-[#6B3CC9] font-semibold text-[27px] leading-6 pb-8">
            Web & Mobile App Development
          </h2>
          <p className="text">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div>
            <Button text="LEARN MORE" />
          </div>
        </div>
      </div>

      <div className="md:w-[688px] lg:w-[996px] flex md:flex-row flex-col-reverse justify-between text-center md:text-left md:pt-20 mx-auto">
        <div className="lg:w-[530px] flex flex-col justify-start md:justify-center md:w-[393px]">
          <h2 className="text-[#6B3CC9] font-semibold text-[27px] pb-8">
            Digital Strategy Consulting
          </h2>
          <p className="text">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div>
            <Button text="LEARN MORE" />
          </div>
        </div>

        <img
          src="/image-1.png"
          alt="Digital Strategy Consulting"
          className="md:h-[276px] lg:h-[414px]"
        />
      </div>
    </section>
  );
};

export default Services;
