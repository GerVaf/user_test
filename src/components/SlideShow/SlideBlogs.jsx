import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { LuMusic } from "react-icons/lu";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detail } from "../../Global/Slice/blogSlice";

const SlideBlogs = ({ blg }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const regex = /(<([^>]+)>)/gi;
  const smallScreen = useMediaQuery("(min-width: 640px)");

  return smallScreen ? (
    // Laptop Slides
    <div
      onClick={() => {
        nav("/detail");
        dispatch(detail(blg));
      }}
      className="h-full w-full relative text-white hover:bg-white/20 rounded-md overflow-hidden duration-200 transition-all border-y border-slate-400"
      // style={{
      //   backgroundImage: `url(${blg?.images[0]?.url})`,
      // }}
    >
      <img src={blg?.images?.url} alt="" className=" absolute" />
      <div className="w-full h-full bg-gradient-to-b from-transparent to-slate-900/70 absolute"></div>
      <div className="absolute bottom-10 mx-5 flex flex-col gap-3 text-start">
        <span className="bg-white rounded-md gap-1 font-bold text-black px-2 self-start flex justify-center items-center">
          {blg?.category === "sport" ? <MdOutlineSportsSoccer /> : <LuMusic />}
          {blg.category}
        </span>

        <div className="gap-2 flex flex-col">
          <h1 className="lg:text-3xl md:text-xl text-lg font-bold">
            {blg?.title}
          </h1>
          <p className="md:text-base text-sm italic text-gray-200">
            {blg?.author}
          </p>
        </div>

        <div className=" md:text-base lg:text-lg text-sm w-full md:w-[80%]">
          {blg?.description
            ?.replace(regex, "")
            ?.replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, " ")
            ?.substring(0, 250)}
          <span className="font-semibold italic text-gray-200">
            {" "}
            Read more...
          </span>
        </div>
      </div>
    </div>
  ) : (
    // Mobile
    <div
      onClick={() => {
        nav("/detail");
        dispatch(detail(blg));
      }}
      className="md:h-80 w-full md:flex md:flex-row text-white md:gap-5 flex flex-col hover:bg-white/20 rounded-md overflow-hidden duration-200 transition-all border-y border-slate-400"
    >
      <div className="h-[250px] md:h-full">
        <img
          className="rounded-md object-contain object-center border border-b border-slate-100"
          src={blg?.images?.url}
          alt=""
        />
      </div>

      <div className="h-[20%] md:w-[75%] flex flex-col text-start gap-4 p-5">
        <span className="bg-white rounded-lg gap-1 justify-center font-bold text-black w-20 flex items-center">
          {blg?.category === "sport" ? <MdOutlineSportsSoccer /> : <LuMusic />}
          {blg.category}
        </span>

        <div className="gap-3 flex flex-col items-start">
          <h1 className="md:text-2xl text-lg font-bold">{blg?.title}</h1>
          <p className="md:text-base text-sm italic text-gray-400">
            {blg?.author}
          </p>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className=" md:text-base text-sm text-start">
            {blg?.description
              .replace(regex, "")
              .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, " ")
              .substring(0, 350)}
            ...
          </div>
          <span className="text-end underline font-bold cursor-pointer">
            Read More . . .
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideBlogs;
