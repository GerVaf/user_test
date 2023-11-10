import React, { useEffect, useState } from "react";
import music from "/music.svg";
import sport from "/sports.svg";
import { get } from "../../Global/api";
import RecentBlog from "../VariantBlogs/RecentBlog";
import Loading from "../Loading/Loading";

const Category = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("music"); // State for active category

  useEffect(() => {
    try {
      get(`/published_blogs?category=${activeCategory}`).then((response) => {
        const sortDateData = response?.data?.data?.sort((a, b) =>
          a.date < b.date ? 1 : -1
        );
        setBlogs(sortDateData);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Music and Sport Category */}
      <div className="grid grid-cols-2 bg-slate-100/50">
        {/* Music */}
        <img
          src={music}
          alt=""
          className={`w-full h-[100px] cursor-pointer py-3 ${
            activeCategory === "music" ? "bg-white" : ""
          }`}
          onClick={() => handleCategoryClick("music")}
        />
        {/* Sport */}
        <img
          src={sport}
          alt=""
          className={`w-full h-[100px] cursor-pointer py-3 ${
            activeCategory === "sport" ? "bg-white" : ""
          }`}
          onClick={() => handleCategoryClick("sport")}
        />
      </div>

      {/* Blogs */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          data-lenis-prevent
          className="px-5 mt-5 overflow-y-scroll h-[800px] scrollbar-none "
        >
          {blogs?.map((blog) => {
            return <RecentBlog key={blog?.id} blog={blog} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
