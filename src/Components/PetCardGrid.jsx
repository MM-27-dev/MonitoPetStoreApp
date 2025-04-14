import React from "react";

const pets = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    image: "/images/pet1.jpg", // Replace with actual image paths
  },
  {
    id: "MO502",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    image: "/images/pet2.jpg",
  },
  {
    id: "MO102",
    name: "Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    image: "/images/pet3.jpg",
  },
  {
    id: "MO512",
    name: "Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    image: "/images/pet4.jpg",
  },
  {
    id: "MO231",
    name: "Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    image: "/images/pet5.jpg",
  },
  {
    id: "MO502",
    name: "Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "9.000.000 VND",
    image: "/images/pet6.jpg",
  },
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.500.000 VND",
    image: "/images/pet7.jpg",
  },
  {
    id: "MO512",
    name: "Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    image: "/images/pet8.jpg",
  },
];

const PetCardGrid = () => {
  return (
    <div className="bg-black py-12 px-6 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002D4F]">
          Take A Look At Some Of Our Pets
        </h2>
        <button className="text-[#002D4F] border border-[#002D4F] rounded-full px-5 py-2 hover:bg-[#002D4F] hover:text-white transition">
          View more →
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
