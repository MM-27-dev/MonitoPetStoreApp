import React from "react";
import { FaPlay } from "react-icons/fa";
import pets from "../data/petData";

const PetCardGrid = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="my-6 flex justify-between  flex-wrap  gap-4">
        {/* Text section with p and h2 stacked */}
        <div className="flex flex-col items-start">
          <p className="text-base text-gray-700">
            Hard to choose right products for your pets?
          </p>
          <h2 className="text-4xl font-bold text-[#00345B]">Our Products</h2>
        </div>

        {/* Button section */}
        <button className="flex items-center gap-2 border border-[#002D4F] text-[#002D4F] px-5 py-2 rounded-full font-medium hover:bg-[#002D4F] hover:text-white transition">
          View Intro
          <FaPlay className="text-sm" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl p-3 hover:scale-105 transition"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-sm mb-1">
              {pet.id} - {pet.name}
            </h3>
            <p className="text-xs text-gray-600">
              Gene: {pet.gender} &nbsp;&nbsp; • &nbsp;&nbsp; Age: {pet.age}
            </p>
            <p className="font-bold mt-2">{pet.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCardGrid;
