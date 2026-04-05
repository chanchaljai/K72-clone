import React from "react";
import Video from "../components/home/Video";
import HomeTopText from "../components/home/HomeTopText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div class
      className="h-screen w-screen">
      <div className="w-screen h-screen fixed top-0 left-0">
        <Video />
      </div>
      <div className="h-screen w-screen relative">
        <div><HomeTopText /></div>
        <h1>HomeBottomText</h1>
      </div>

    </div>
  );
};

export default Home;
