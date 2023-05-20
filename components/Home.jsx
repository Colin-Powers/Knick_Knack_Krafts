import React, { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const slides = [
    {
      url: "https://i.etsystatic.com/36216678/r/il/12229a/3996327423/il_680x540.3996327423_rtvc.jpg",
    },
    {
      url: "https://i.etsystatic.com/36216678/c/2250/1788/0/163/il/934042/4659095716/il_680x540.4659095716_2e5p.jpg",
    },
    {
      url: "https://i.etsystatic.com/36216678/c/2250/1788/0/538/il/51bbda/4660334867/il_680x540.4660334867_itx5.jpg",
    },

    {
      url: "https://i.etsystatic.com/36216678/c/2102/1671/53/350/il/7f9ee4/4592199250/il_680x540.4592199250_cf0e.jpg",
    },
    {
      url: "https://i.etsystatic.com/36216678/c/3000/2250/0/0/il/68d547/4035775164/il_680x540.4035775164_2hmk.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div name="home" className="w-full h-screen bg-[#008B8B] py-[300px]">
      {/* Home Info Start */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl sm:text-7xl font-bold text-[#fff] pt-40 sm:pt-0">
          Knick Knack Krafts
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bolde text-[#ffcba4]">
          Conifer, CO
        </h2>
        {/* Image Slider Start */}
        <div className="m-auto py-16 px-4 pt-4 sm:w-[800px] sm:h-[450px] w-[350px] h-[290px] relative flex-shrink-0 group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
          {/* Imgage Slider End */}
        </div>
      </div>
      {/* Home Info End */}
    </div>
  );
};

export default Home;
