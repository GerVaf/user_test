import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { detail } from "../../Global/Slice/blogSlice";

const RecentCard = ({ blog }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // Change Html description to String
  const regex = /(<([^>]+)>)/gi;
  const desc = blog?.description
    .replace(regex, "")
    .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, " ");

  return (
    <div className="relative h-full rounded overflow-hidden">
      <img src={blog?.images?.url} alt="" />
      {/* Title and Description */}
      <div className="absolute bottom-0 w-full h-[40%] flex flex-col p-5 text-white bg-gradient-to-b from-transparent via-black/80 to-black/90">
        <div className="flex-1 flex flex-col items-start gap-2">
          {/* Category */}
          <p className="bg-white text-black px-3 rounded uppercase">{blog?.category}</p>
          {/* Title */}
          <h1 className=" font-black text-3xl">{blog?.title}</h1>
          {/* Description */}
          {desc.length > 100 ? desc.substring(0, 100) + "..." : desc}
        </div>
        {/* Read More Button */}
        <div
          onClick={() => {
            nav("/detail");
            dispatch(detail(blog));
          }}
          className=" py-2 px-3 flex justify-center items-center border border-slate-50/90 rounded-md text-white font-semibold transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <span>Read more</span>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
