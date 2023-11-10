import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detail } from "../../Global/Slice/blogSlice";

const RecentBlog = ({ blog }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // console.log(blog);
  return (
    <div className="relative grid grid-cols-10 gap-5 items-center my-5 text-white bg-black/60 rounded-[3px] border border-slate-50/20 overflow-hidden cursor-pointer transition-color duration-300 hover:border-slate-50/90 group">
      {/* image */}
      <div className="col-span-4 md:col-span-2 xl:col-span-2">
        <img src={blog?.images?.url} alt="" className="aspect-square" />
      </div>
      {/* Title */}
      <h1 className="col-span-6 md:col-span-8 xl:col-span-7 text-sm md:font-bold md:text-xl lg:text-3xl">{blog?.title}</h1>

      {/* Read More */}
      <div
        onClick={() => {
          nav("/detail");
          dispatch(detail(blog));
        }}
        className="w-full h-full bg-black/40 backdrop-blur absolute -top-20 left-0 grid place-content-center transition-all duration-500 opacity-0 group-hover:top-0 group-hover:opacity-100"
      >
        <button className="px-5 py-1 border border-slate-50/90 rounded-md text-white font-semibold transition-colors duration-300 hover:bg-white hover:text-black">
          Read More
        </button>
      </div>
    </div>
  );
};

export default RecentBlog;
