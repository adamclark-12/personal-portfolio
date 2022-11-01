import React, { useState } from "react";
import { SliderImages } from "./SliderImages";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className=" relative justify-center justify-items-center bottom-20 w-[800px] h-[400px] overflow-hidden">
      <BsArrowRightCircleFill
        className="absolute top-1/2 right-2 text-3xl cursor-pointer select-none text-slate-500 bg-[#F7B023] sidebar-icon hover:bg-[#F7B023]"
        onClick={nextSlide}
      />
      <BsArrowLeftCircleFill
        className="absolute top-1/2 left-2 text-3xl cursor-pointer select-none text-slate-500 bg-[#F7B023]  sidebar-icon hover:bg-[#F7B023]"
        onClick={prevSlide}
      />
      {/* Styled left and right arrows */}

      {SliderImages.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active:" : "slide"}
            key={index}
            className=""
          >
            {index === current && (
              <img className="" src={slide.image} alt={slide.alt} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
