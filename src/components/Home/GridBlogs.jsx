import React from "react";
import GridBlog from "../VariantBlogs/GridBlog";

const GridBlogs = ({blogs}) => {
  // console.log(blogs);
  return (
    <div data-lenis-prevent className="gridBlog overflow-y-scroll h-[500px] scrollbar-none">
      {
        blogs?.map((blog)=>{
          return <GridBlog key={blog?.id} blog={blog}/>
        })
      }
    </div>
  );
};

export default GridBlogs;
