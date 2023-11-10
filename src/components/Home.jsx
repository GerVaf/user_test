import React from "react";
import Hero from "./Home/Hero";
import Content from "./Home/Content";
import Cards from "./Home/CardsContainer/Cards";
import RecentNews from "./Home/RecentNews";
import ContactUs from "./Home/Contact/ContactUs";
import Lenis from "@studio-freight/lenis";
import Category from "./Home/Category";
const Home = () => {
  const lenis = new Lenis({
    duration: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="z-50 ">
      <Hero />
      <Category />
      <div className="max-w-[1420px] mx-auto">
        <Content />
        <Cards />
        <RecentNews />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
