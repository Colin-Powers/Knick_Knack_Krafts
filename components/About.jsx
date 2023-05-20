import React from "react";
import Jennie from "../assets/Jennie.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-ful h-screen py-[100px] text-[#fff] bg-[#008B8B]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* About label Container */}
        <div className="pb-8 text-center pt-60 sm:pt-0">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 text-[#fff] border-[#ffcba4]">
            About
          </p>
          <p className="py-4 sm:text-2xl">
            I've always had a passion for crafts and home decor. In 2021, with
            encouragement from friends and family, I decided to turn that
            passion into a business! Knick Knack Krafts allows me to take the
            inspiration I find from nature and channel it into design. Want to
            check out my items in person? Visit A Borgata in Conifer, CO.
            Looking for a specific design that you don't see on the site? Custom
            orders and new ideas are always welcome! For more photos and product
            information please visit Etsy.
          </p>
          <img
            className="py-4 w-[350px] sm:w-[500px] inline"
            src={Jennie}
            alt="Jennie Powers"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
