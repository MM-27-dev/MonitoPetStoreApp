import React from "react";
import { PlayCircle } from "lucide-react";

const AdoptionBanner = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center rounded-[32px] bg-[#FFF0D4] overflow-hidden    md:px-20 relative">
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002D56] mb-4">
          Adoption <span className="inline-block">🐾</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002D56] mb-6">
          We Need Help. So Do They.
        </h2>
        <p className="text-[#002D56] text-base md:text-lg mb-8">
          Adopt a pet and give it a home, <br />
          it will love you back unconditionally.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#002D56] text-white px-6 py-3 rounded-full font-medium hover:bg-[#001930] transition">
            Explore Now
          </button>
          <button className="border border-[#002D56] text-[#002D56] px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#002D56] hover:text-white transition">
            View Intro
            <PlayCircle size={20} />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="/adoption-hand.svg"
          alt="Hand holding paw"
          className="max-w-md md:max-w-lg w-full"
        />
      </div>
    </section>
  );
};

export default AdoptionBanner;
