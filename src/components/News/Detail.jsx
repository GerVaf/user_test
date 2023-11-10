import React from "react";
import { useSelector } from "react-redux";
import HtmlParser from "react-html-parser";
import { useEffect } from "react";

const Detail = () => {
  const detail = useSelector((state) => state?.blog?.detail_blog);

  useEffect(() => {
    console.log(detail);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-slate-900 py-10">
      {/* Main Image,Title,Author,Date,Program */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-12 items-center gap-5 bg-slate-800/30 border border-slate-50/20 rounded-md p-5 my-20">
        {/* Left */}
        <div className="col-span-12 lg:col-span-6 text-white">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[90px]">{detail?.title}</h1>
          <h2 className="font-semibold text-slate-300 italic my-3">
            {detail?.author}
          </h2>
          <p>
            {detail?.date}{" "}
            {detail?.programs?.length > 0 &&
              `/ ${detail?.programs?.join(", ")}`}
          </p>
        </div>
        {/* Right */}
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
          <img
            src={detail?.images?.url}
            alt=""
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
      {/* Description */}
      <div className="text-white leading-8 w-[95%] md:w-[750px] mx-auto my-3">
        {HtmlParser(detail?.description)}
      </div>
      <div className="max-w-[1300px] mx-auto px-5 my-10">
        {/* Contact */}
        <div className="grid grid-cols-12 gap-8 items-center mb-20">
          {/* Left */}
          <div className="col-span-12 lg:col-span-6">
            {/* Contact Form */}
            <h1 className="text-5xl font-bold uppercase text-white mb-5">
              Contact Us
            </h1>
            <div className="p-5 flex flex-col gap-3 border border-slate-50/20 rounded-md">
              <input
                type="text"
                placeholder="Name"
                className="pl-3 py-3 rounded-sm outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="pl-3 py-3 rounded-sm outline-none"
              />
              <textarea
                rows={10}
                className="rounded-sm pl-3 py-3 outline-none"
              ></textarea>
              <button className="py-2 px-6 self-end bg-blue-600 text-white rounded-md">
                Submit
              </button>
            </div>
            {/* Address */}
            <div className="mt-5 flex flex-col gap-2 text-white">
              <div className="grid grid-cols-6 ">
                <h1 className="col-span-1 uppercase">Address</h1>
                <p className="col-span-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam inventore unde, quod ducimus, vero earum tempora
                </p>
              </div>
              <div className="grid grid-cols-6 ">
                <h1 className="col-span-1 uppercase">Visit Us</h1>
                <a className="col-span-5 underline">
                  www.opaqueindustries.news
                </a>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-3 text-white">
            {/* Image */}
            <div className="bg-white/50 h-[500px] max-w-[500px]">
              {/* <img src={lottie} alt="" className="w-full"/> */}
            </div>
            {/* Text */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              sequi dolor ex similique nobis officiis. Ipsum officiis in nobis
            </p>
            <h1 className="uppercase text-3xl">Opaque industries ltd.</h1>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2 text-white border border-slate-50">
                Learn More
              </button>
              <h1 className="uppercase text-3xl">Our Story</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
