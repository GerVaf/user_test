import React from "react";
import lottie from "/lottie.gif";
const Card = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center bg-white text-white rounded-md">
      {/* Top Part Icon */}
      <div className="bg-white">
        <img src={lottie} alt="" className="h-[100px]" />
      </div>
      {/* Middle Text */}
      <div className="bg-black text-center py-5">
        <h1 className="font-bold text-3xl uppercase mb-3">Track</h1>
        <p className="w-[85%] md:w-[70%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus,
          eveniet tenetur minima explicabo distinctio cumque deserunt
          praesentium assumenda, architecto magnam accusamus consequuntur quam
          adipisci{" "}
        </p>
      </div>
      {/* Bottom Text*/}
      <div className="bg-white text-black py-5">
        <h1 className="uppercase">Together We can make a difference</h1>
      </div>
    </div>
  );
};

export default Card;