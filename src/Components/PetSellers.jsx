import React from "react";
import { ChevronRight } from "lucide-react";

const sellerLogos = [
  "/sheba.svg",
  "/whiskas.svg",
  "/bakers.svg",
  "/felix.svg",
  "/goodboy.svg",
  "/butchers.svg",
  "/pedigree.svg",
];

const PetSellers = () => {
  return (
    <section className="px-6 py-8 bg-white md:px-20">
      {/* Title and Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[#002D56]">Pet Sellers</h2>
        <button className="flex items-center gap-2 border border-[#002D56] text-[#002D56] px-4 py-2 rounded-full hover:bg-[#002D56] hover:text-white transition">
          View all our sellers
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        {sellerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Seller logo ${index + 1}`}
            className="h-12 max-w-[120px] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default PetSellers;
