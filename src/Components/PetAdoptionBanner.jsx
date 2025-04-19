import React from "react";
import { FaPlay } from "react-icons/fa";

const PetAdoptionBanner = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-[#002F5F] rounded-[2rem] p-8 lg:p-16 text-white ">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 relative z-10">
        <img
          src="/woman-dog.svg"
          alt="Woman holding dog"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 bg-[#FFF1DC] text-[#002F5F] rounded-[2rem] p-8 lg:p-12 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">One More Friend</h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#003366] mb-4">
          Thousands More Fun!
        </h2>
        <p className="text-base lg:text-lg mb-8 leading-relaxed">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="mt-6 flex justify-evenly flex-wrap">
          <button className="flex items-center gap-2 border border-[#002D4F] text-[#002D4F] px-5 py-2 rounded-full font-medium hover:bg-[#002D4F] hover:text-white transition">
            View Intro
            <FaPlay className="text-sm" />
          </button>
          <button className="bg-[#002D4F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#001f37] transition">
            Explore Now
          </button>
        </div>
      </div>
     
    </section>
  );
};

export default PetAdoptionBanner;
