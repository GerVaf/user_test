import React from "react";
import Nav from "./Nav_Foot/Nav";
import Foot from "./Nav_Foot/Foot";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800 overflow-x-hidden">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
