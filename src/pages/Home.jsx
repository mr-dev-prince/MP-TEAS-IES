import React from "react";
import Carousel from "../components/swiper/Carousel";
import Banner from "../components/fragments/Banner";
import Description from "../components/fragments/Description";

const Home = () => {
  return (
    <div className="w-full h-fit md:px-16 px-4 space-y-2">
      <Banner />
      <Carousel />
      <Description/>
    </div>
  );
};

export default Home;
