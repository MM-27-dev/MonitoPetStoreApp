import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 w-full">
      <div className="flex items-center justify-between">
        {/* Left section: Logo */}
        <div className="flex flex-col items-center space-x-0.5">
          <p className="text-2xl font-extrabold text-#103559-900">Monitö</p>
          <p className="text-xs text-#103559-900 text-center mr-2">
            Pets for Best
          </p>
        </div>

        {/* Middle section: Navigation links */}
        <nav className="flex items-center space-x-8 text-dark-blue-900 font-bold">
          <a href="#" className="hover:text-blue-700">
            Home
          </a>
          <a href="#" className="hover:text-blue-700">
            Category
          </a>
          <a href="#" className="hover:text-blue-700">
            About
          </a>
          <a href="#" className="hover:text-blue-700">
            Contact
          </a>
        </nav>

        {/* Right section: Search, Button, Language */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <div className="flex items-center w-80 bg-gray-100 px-4 py-2 rounded-full">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search something here!"
              className="ml-2 w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* CTA button */}
          <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800">
            Join the community
          </button>

          {/* Language selector */}
          <div className="flex items-center text-blue-900 font-semibold">
            <div className="bg-red-600 rounded-full p-1 ">
              <FaStar className="text-white text-xs" />
            </div>
            <span className="ml-1">VND</span>
            <FaChevronDown className="ml-1 text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
