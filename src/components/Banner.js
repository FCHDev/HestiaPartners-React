import React from "react";
import banner from "../assets/img/houseBanner.jpg";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
