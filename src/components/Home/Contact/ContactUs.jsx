import React from "react";
import ReadyToMake from "./ReadyToMake";
import lottie from "/lottie.gif";

const ContactUs = () => {
  return (
    <div className="px-5">
      <ReadyToMake />
      {/* Contact */}
      <div className="grid grid-cols-12 gap-8 items-center my-20">
        {/* Left */}
        <div className="col-span-12 lg:col-span-6 ">
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
              
              className="rounded-sm pl-3 py-3 outline-none resize-none"
            ></textarea>
            <button className="py-2 px-6 self-end bg-blue-600 text-white rounded-md">
              Submit
            </button>
          </div>
          {/* Address */}
          <div className="mt-5 flex flex-col gap-2 text-white">
            <div className="grid grid-cols-6 ">
              <h1 className="col-span-1 uppercase">Address</h1>
              <p className="col-span-6 md:col-span-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                inventore unde, quod ducimus, vero earum tempora
              </p>
            </div>
            <div className="grid grid-cols-6 ">
              <h1 className="col-span-1 uppercase">Visit Us</h1>
              <a className="col-span-6 md:col-span-5 underline">www.opaqueindustries.news</a>
            </div>
          </div>
          
        </div>
        {/* Right */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-3 text-white">
          {/* Image */}
          <div className="bg-white/50 h-[500px]">
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
  );
};

export default ContactUs;