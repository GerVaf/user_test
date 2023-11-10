import React from "react";
import GridBlog from "../VariantBlogs/GridBlog";

const LatestGridBlogs = ({ latest }) => {
  console.log(latest);
  return (
    <div
      data-lenis-prevent
      className="gridBlog overflow-y-scroll h-[500px] scrollbar-none"
    >
      {latest?.map((blog) => {
        return <GridBlog key={blog?.id} blog={blog} />;
      })}
    </div>
  );
};

export default LatestGridBlogs;
