import React, { useEffect, useState } from "react";
import { get } from "../../Global/api";

import SwiperCarousel from "../Carousel/SwiperCarousel";

const RecentNews = () => {
  const [recentNews, setRecentNews] = useState([]);

  useEffect(() => {
    get("/published_blogs")
      .then((response) => {
        setRecentNews(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-5 my-20 ">
      {/* Header */}
      <h1 className="font-bold text-5xl text-white mb-5">Recent News</h1>
      {/* Blogs */}
      <SwiperCarousel recentNews={recentNews}/>
    </div>
  );
};

export default RecentNews;
