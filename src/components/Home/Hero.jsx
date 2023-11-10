import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className=" bg-[#0f0f0f] lg:h-screen xl:h-full xl:py-20 flex justify-center items-center">
      <div className="grid grid-cols-12 items-center gap-5 pt-24 lg:pt-16 px-8 max-w-[1300px] mx-auto">
  {/* Left */}
  <div className="col-span-12 lg:col-span-6 flex flex-col gap-10 text-white">
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-3xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        exercitationem fugiat harum quasi nesciunt quia sed eum doloribus cum
        nulla.
      </h1>
      <p>The story of brands begins here</p>
      <p className="self-start px-5 py-1 bg-gradient-to-r from-white/40 to-gray-950">
        Launch Date 1st of November 2023
      </p>
    </div>
    <div className="flex items-center gap-3 text-2xl">
      <FaFacebookSquare />
      <FaSquareInstagram />
      <FaSquareXTwitter />
    </div>
  </div>
  {/* Right */}
  <div className="col-span-12 lg:col-span-6">
    <img
      src="https://images.unsplash.com/photo-1682687220015-186f63b8850a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
      alt="blog main image"
      className="w-full h-full rounded-md my-5"
    />
  </div>
</div>;
    </div>
  );
};

export default Hero;

