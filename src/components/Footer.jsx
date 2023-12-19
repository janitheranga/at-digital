import React from "react";

const Footer = () => {
  return (
    <footer className="px-[26px] py-[20px] lg:px-[80px] lg:pt-[40px] lg:pb-[20px] bg-[#6B3CC9] font-inter text-white flex flex-col">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="flex flex-col justify-start lg:w-[2fr] pb-[60px]">
          <a href="/" className="pb-[20px]">
            <img
              src="/Logo.png"
              alt="AT Digital logo"
              className="h-[25px] object-contain"
            />
          </a>
          <p className="font-lato md:w-[413px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:w-[511px] justify-between">
          <div className="flex flex-col">
            <h4 className="text-[21px] pb-2.5">Our Technologies</h4>
            <ul className="list-none flex flex-col text-[14px] leading-[16.94px]">
              <li className="py-2">ReactJS</li>
              <li className="py-2">Gatsby</li>
              <li className="py-2">NextJS</li>
              <li className="py-2">NodeJS</li>
              <li className="py-2">GraphQL</li>
              <li className="py-2">Laravel</li>
            </ul>
          </div>
          <div className="flex flex-col pt-10 md:pt-0">
            <h4 className="text-[21px] pb-2.5">Our Services</h4>
            <ul className="list-none flex flex-col text-[14px] leading-[16.94px] w-[197px]">
              <li className="py-2">Social media Marketing</li>
              <li className="py-2">Web & Mobile App Development</li>
              <li className="py-2">Data & Analytics</li>
              <li className="py-2">Google Marketing solutions</li>
              <li className="py-2">Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[1px] lg:w-[630px] md:w-[678px] w-[320px] bg-white mt-[20px]" />
        <div className="flex flex-row pt-[8px]">
          <a className="mr-2.5" href="">Privacy Policy</a>
          <div className="mx-2.5 w-[1px] h-[16px] bg-white" />
          <a className="ml-2.5" href="">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
