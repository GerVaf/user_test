import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import RecentCard from "./RecentCard";

const SwiperCarousel = ({ recentNews }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={25}
      pagination={pagination}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {recentNews?.map((blog, i) => {
        return (
          <SwiperSlide key={i}>
            <RecentCard blog={blog} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarousel;
