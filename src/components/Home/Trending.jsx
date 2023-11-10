import React, { useEffect, useState } from "react";
import GridBlogs from "./GridBlogs";
import axios from "axios";

const Trending = ({trending}) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* Left */}
      <div className="col-span-12 xl:col-span-7 bg-white/50 rounded-md h-[500px] xl:h-full"></div>
      {/* Right */}
      <div className="col-span-12 xl:col-span-5 pb-5 rounded-md border border-slate-50/20 bg-black/50 relative overflow-hidden">
        {/* Trending Blogs*/}
        <h1 className="font-bold text-xl uppercase p-3 text-white border-b border-slate-50/20">
          Trending News
        </h1>
        <GridBlogs blogs={trending} />
        {/* Overlay */}
        <div className="w-full h-[50px] absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
      </div>
    </div>
  );
};

export default Trending;
