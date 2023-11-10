import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/News/Detail";
import Sport from "./components/Sport";
import Music from "./components/Music";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addAll, addMusic, addSport } from "./Global/Slice/blogSlice";
import Loading from "./components/Loading/Loading";
import { get } from "./Global/api";

const App = () => {
  return (
    <div className="custom-scrollbar">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
