import React from "react";
// import dog-girl from "./react.svg";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-[#FEF1DC] w-full  px-6 md:px-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D4F] leading-tight">
            <span className="relative inline-block">
              <span className="bg-[#FFE5A1] absolute inset-0 -rotate-3 -skew-y-3 rounded-xl -z-10"></span>
              One More Friend
            </span>
            <br />
            <span className="font-medium"> Thousands More Fun!</span>
          </h1>
          <p className="text-[#002D4F] mt-4 text-sm md:text-base">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 border border-[#002D4F] text-[#002D4F] px-5 py-2 rounded-full font-medium hover:bg-[#002D4F] hover:text-white transition">
              View Intro
              <FaPlay className="text-sm" />
            </button>
            <button className="bg-[#002D4F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#001f37] transition">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative overflow-hidden">
          {/* Yellow shape background (back-most layer) */}
          <img
            src="./Rectangle 1.svg"
            alt="yellow rectangle"
            className="absolute right-25 top-[20px] w-[500px] h-[400px] z-10"
          />

          {/* Blue shape layered above yellow */}
          <img
            src="./Rectangle 2.svg"
            alt="cream rectangle"
            className="absolute right-[85px] top-[20px] w-[506px] h-[400px] z-10"
          />

          {/* Girl holding dog (top-most layer) */}
          <img
            src="./dog-girl.svg"
            alt="Happy girl holding dog"
            className="relative z-20 mx-auto max-h-[90%] object-contain mt-10"
          />

          {/* View More Button */}
          <button className="absolute bottom-6 right-6 bg-white border border-gray-300 text-black px-4 py-2 rounded-full z-30 shadow-md hover:bg-gray-100 transition">
            View more &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
