import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Video from "./Pages/video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:catagoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
