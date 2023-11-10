import React, { useEffect, useState } from "react";
import RecentBlog from "../VariantBlogs/RecentBlog";
import axios from "axios";
import { get } from "../../Global/api";

const RecentNews = () => {
  const [recentNews, setRecentNews] = useState([]);
  useEffect(() => {
    get("/published_blogs")
      .then((response) => {
        setRecentNews(response?.data?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-5 my-20 ">
      {/* Header */}
      <h1 className="font-bold text-5xl text-white">Recent News</h1>
      {/* Blogs */}
      <div
        data-lenis-prevent
        className="mt-3 overflow-y-scroll h-[600px] scrollbar-none "
      >
        {recentNews?.map((blog) => {
          return <RecentBlog key={blog} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default RecentNews;
