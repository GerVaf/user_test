import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Blog/Testing.css";
import { useSelector } from "react-redux";
import SlideBlogs from "../SlideShow/SlideBlogs";
const Blog = () => {
  const musicData = useSelector((state) => state?.blog?.music);
  const sportData = useSelector((state) => state?.blog?.sport);

  return (
    <div className="text-white flex justify-center items-center py-5 max-w-[1300px] my-16 mx-auto">
      <div className="flex flex-col gap-10 w-full ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[700px] md:h-[90vh]"
        >
          {musicData?.map((blg, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideBlogs key={blg.id} blg={blg} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[700px] md:h-[90vh]"
        >
          {sportData?.map((blg, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideBlogs key={blg.id} blg={blg} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
