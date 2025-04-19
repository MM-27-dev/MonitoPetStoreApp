import React from "react";
import { Gift } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import products from "../data/productsData";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4 max-w-sm hover:scale-[1.02] transition-transform duration-300">
    <img
      src={product.image}
      alt={product.title}
      className="rounded-lg w-full h-64 object-contain"
    />
    <div>
      <h3 className="text-lg font-bold text-[#00345B]">{product.title}</h3>
      <p className="text-sm text-gray-700 mt-1">
        Product:{" "}
        <span className="font-medium text-gray-900">{product.productType}</span>
        {product.size && (
          <>
            {" · "}Size:{" "}
            <span className="font-medium text-gray-900">{product.size}</span>
          </>
        )}
      </p>
      <p className="text-md font-bold text-[#00345B] mt-2">{product.price}</p>
    </div>
    <div className="flex items-center gap-2 bg-[#FFF2CC] text-[#00345B] text-sm px-3 py-2 rounded-lg w-fit mt-auto">
      <Gift className="w-4 h-4 text-pink-500" />
      <span> {product.offer} </span>
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="bg-white py-12 pb-0 px-6 md:px-20">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductGrid;
