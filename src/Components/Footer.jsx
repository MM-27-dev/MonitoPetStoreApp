import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF2D8] text-[#002D56] pt-12 pb-6 px-6 md:px-16 rounded-t-3xl">
      {/* Newsletter Signup */}
      <div className="bg-[#002D56] text-white rounded-2xl px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <h2 className="text-2xl font-semibold text-center md:text-left">
          Register Now So You Don’t Miss <br className="hidden md:block" />
          Our Programs
        </h2>
        <div className="flex items-center w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your Email"
            className="rounded-xl px-4 py-3 w-full md:w-80 border border-gray-300 text-black outline-none"
          />
          <button className="bg-white text-[#002D56] font-medium px-5 py-3 rounded-xl hover:bg-gray-100 transition">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Navigation Links and Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6">
        {/* Navigation */}
        <nav className="flex gap-8 text-base font-medium mb-4 md:mb-0">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-600">
        <p>© 2022 Monito. All rights reserved.</p>
        <div className="text-[#002D56] font-bold text-xl flex items-center gap-1 mt-2 md:mt-0">
          Monit<span className="text-[#00B2FF] text-2xl">ö</span>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
