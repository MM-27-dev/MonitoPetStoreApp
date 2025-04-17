import React from "react";
import { FaPlay } from "react-icons/fa";

const pets = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    image: "/image 2.svg", 
  },
  {
    id: "MO502",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    image: "/image 3.svg",
  },
  {
    id: "MO102",
    name: "Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    image: "/image 5.svg",
  },
  {
    id: "MO512",
    name: "Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    image: "/image 4.svg",
  },
  {
    id: "MO231",
    name: "Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    image: "/image 5.svg",
  },
  {
    id: "MO502",
    name: "Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "9.000.000 VND",
    image: "/image 6.svg",
  },
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.500.000 VND",
    image: "/image 7.svg",
  },
  {
    id: "MO512",
    name: "Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    image: "/image 8.svg",
  },
];

const PetCardGrid = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="mt-6 flex justify-evenly flex-wrap  gap-4">
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
