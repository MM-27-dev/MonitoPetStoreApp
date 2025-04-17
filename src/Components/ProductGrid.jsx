import React from "react";
import { Gift } from "lucide-react";
import { FaPlay } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Reflex Plus Adult Cat Food Salmon",
    image: "/image 2 (1).svg",
    productType: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: 2,
    title: "Reflex Plus Adult Cat Food Salmon",
    image: "/Frame 7 (1).svg",
    productType: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: 3,
    title: "Cat scratching ball toy kitten sisal rope ball",
    image: "/Frame 7 (2).svg",
    productType: "Toy",
    price: "1.100.000 VND",
    offer: "Free Cat Food",
  },
  {
    id: 4,
    title: "Cute Pet Cat Warm Nest",
    image: "/Frame 7 (4).svg",
    productType: "Toy",
    price: "410.000 VND",
    offer: "Free Cat Food",
  },
  {
    id: 5,
    title: "NaturVet Dogs – Omega-Gold Plus Salmon Oil",
    image: "/Frame 7 (5).svg",
    productType: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: 6,
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    image: "/Frame 7 (6).svg",
    productType: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    offer: "Free Toy & Free Shaker",
  },
  {
    id: 7,
    title: "Costumes Chicken Drumstick Headband",
    image: "/Frame 7 (7).svg",
    productType: "Costume",
    price: "400.000 VND",
    offer: "Free Cat Food",
  },
  {
    id: 8,
    title: "Plush Pet Toy",
    image: "/Frame 7 (8).svg",
    productType: "Toy",
    price: "250.000 VND",
    offer: "Free Food & Shaker",
  },
];

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
  <div className="py-10 px-6 bg-gray-50 min-h-screen">
    <div className="mt-6 flex justify-between flex-wrap">
      <div className="flex flex-col items-start">
    <p className="text-base text-gray-700">Hard to choose right products for your pets?</p>
    <h2 className="text-4xl font-bold text-[#00345B]">Our Products</h2>
  </div>
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
