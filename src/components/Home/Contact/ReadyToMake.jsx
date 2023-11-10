import React from "react";
import { BsApple } from "react-icons/bs";
import { TbArrowNarrowRight } from "react-icons/tb";
import playStore from "/public/playstore.svg";
const ReadyToMake = () => {
  return (
    <>
      {/* Ready To make Part*/}
      <div className="grid grid-cols-12 gap-5 h-full lg:h-[450px] mb-8">
        {/* Big Bold Text */}
        <h1 className="col-span-12 lg:col-span-6 text-7xl font-bold text-white lg:self-end">
          Ready To make some noise?
        </h1>
        {/* GIF */}
        <div className="col-span-12 lg:col-span-6 bg-white/50 h-[450px]"></div>
      </div>
      {/* Contact Social buttons*/}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-4 py-2 px-5 text-white border border-slate-50/20 rounded-md grid place-content-center">
          <span className="text-xl">Let's start making music on May 5</span>
        </div>
        {/* App Store */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 py-2 px-5 flex justify-between items-center text-white border border-slate-50/20 rounded-md">
          <TbArrowNarrowRight className="text-4xl" />
          <div className="w-48 flex items-center gap-3 bg-white text-black rounded-md px-5 py-2">
            <BsApple className="text-5xl" />
            <p className="text-sm">Download on the App Store</p>
          </div>
        </div>
        {/* GooglePlay */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 py-2 px-5 flex justify-between items-center text-white border border-slate-50/20 rounded-md">
          <TbArrowNarrowRight className="text-4xl" />
          <div className="w-48 flex items-center gap-3 bg-white text-black rounded-md px-5 py-2">
            <img src={playStore} alt="" className="h-7" />
            <p className="text-sm">Get it on Google Play</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToMake;
