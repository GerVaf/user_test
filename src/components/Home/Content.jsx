import React, { useEffect, useState } from "react";
import GridBlogs from "./GridBlogs";
import Marquee from "react-fast-marquee";
import Trending from "./Trending";
import Latest from "./Latest";
import axios from "axios";
import { get } from "../../Global/api";

const Content = () => {
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);

  // Fetch Trending and Latest
  useEffect(() => {
    get("/published_blogs?tag=trending")
      .then((response) => {
        setTrending(response?.data?.data);
      })
      .catch((error) => console.log(error));
    get("/published_blogs?tag=latest")
      .then((response) => {
        setLatest(response?.data?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="px-5 my-20">
      {/* Trending Container */}
      <Trending trending={trending}/>

      {/* Music Text */}
      <h1 className="text-5xl font-black uppercase text-white my-5">
        Music Focused
      </h1>

      {/* Latest Container */}
      <Latest latest={latest}/>

      {/* Sport Text */}
      <h1 className="text-5xl font-black uppercase text-white my-5">
        Sports Focused
      </h1>
    </div>
  );
};

export default Content;
