import React from "react";
import Carousel from "../components/swiper/Carousel";
import Banner from "../components/fragments/Banner";
import Description from "../components/fragments/Description";

const Home = () => {
  return (
    <div className="w-full h-fit md:px-16 px-4 space-y-2 text-center">
      <p className="text-base font-semibold text-red-600 animate-pulse mt-2">---- Date of Paper submission has been extended to 05th Nov 2024 ----</p>
      <Banner />
      <Carousel />
      <Description/>
    </div>
  );
};

export default Home;
