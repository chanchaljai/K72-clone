import React from "react";
import Video from "../components/home/Video";
import HomeTopText from "../components/home/HomeTopText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative">
        <h1>HomeTopText</h1>
        <h1>HomeBottomText</h1>
      </div>

    </div>
  );
};

export default Home;
