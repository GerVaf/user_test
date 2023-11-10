import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import textLogo from "../../../public/logotext.svg";
import indexLogo from "../../../public/INDXlogo.svg";
import sportLogo from "../../../public/sports.svg";
import musicLogo from "../../../public/music.svg";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [active, setActive] = useState(false);


  const nav = [
    {
      id: 1,
      img: musicLogo,
      title: "MUSIC",
      path: "/music",
    },
    {
      id: 2,
      img: sportLogo,
      title: "SPORT",
      path: "/sport",
    },
  ];

  // Navbar Container
  const mainVariants = {
    open: { opacity: 1, scaleY: "100%" },
    closed: {
      opacity: 0,
      scaleY: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.2,
        ease: "easeIn",
        when: "afterChildren",
      },
    },
  };
  // Navbar Items
  const childVarients = {
    open: { y: 0, transition: { type: "spring", stiffness: 120 } },
    closed: { y: "-100%" },
  };

  // HamBurger menu
  const topVarients = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: { rotate: 45, x: 5, y: -1 },
  };

  const midVarients = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
  };

  const bottomVarients = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: { rotate: -45, y: 5, x: 4 },
  };


  return (
    <>
      {/* First Navbar */}
      <div className={`fixed top-0 z-10 w-full bg-slate-100`}>
        {/* nav bar */}
        <nav className={`max-w-[1300px] mx-auto p-5`}>
          <div className="flex lg:flex-row justify-between items-center max-w-[1600px] mx-auto flex-col">
            {/* menu button and image */}
            <div className="flex items-center justify-between w-full ">
              {/* logo  */}
              <Link to={"/"} className="flex items-center">
                <div className=" overflow-hidden  relative">
                  <img className={`h-10`} src={textLogo} alt="" />
                </div>
              </Link>
              {/* menu open for mobile */}
              <div
                onClick={() => {
                  setActive(!active);
                }}
                className="cursor-pointer"
              >
                <motion.div
                  variants={topVarients}
                  animate={active ? "animate" : "initial"}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="w-10 h-[3px] bg-black rounded-full origin-left"
                ></motion.div>
                <motion.div
                  variants={midVarients}
                  animate={active ? "animate" : "initial"}
                  className="w-10 h-[3px] bg-black rounded-full my-2"
                ></motion.div>
                <motion.div
                  variants={bottomVarients}
                  animate={active ? "animate" : "initial"}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="w-10 h-[3px] bg-black rounded-full origin-left"
                ></motion.div>
              </div>
            </div>
            {/* for mobile  */}
            <AnimatePresence>
              {active && (
                <motion.ul
                  variants={mainVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{
                    staggerChildren: 0.1,
                    when: "beforeChildren",
                    duration: 0.3,
                  }}
                  className="absolute pb-20 top-20 left-0 w-full h-screen backdrop-blur-md bg-slate-100 p-5 flex flex-col justify-center items-center gap-5 origin-top"
                >
                  {nav.map((el) => {
                    return (
                      <Link
                        onClick={() => setActive(!active)}
                        key={el.id}
                        to={el.path}
                      >
                        <div className="overflow-hidden flex justify-center items-center relative">
                          <motion.img variants={childVarients} src={el?.img} alt="image" className="w-60 lg:w-72"/>
                         
                        </div>
                      </Link>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
      {/* Second Navbar */}
    </>
  );
};

export default Navbar;
