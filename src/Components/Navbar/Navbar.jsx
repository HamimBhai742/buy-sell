import React from "react";
import { FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 p-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/image/swift-international-payments-system-675x675-removebg-preview.png" // replace with actual logo path
          alt="Logo"
          className="h-6 mr-2"
        />
        <span className="text-white font-semibold text-lg">SwiftExchange</span>
      </Link>

      {/* Navbar links */}
      <div className="flex items-center space-x-4">
        <a href="#all-ads" className="text-white hover:text-gray-200">
          All ads
        </a>
        <a href="#chat" className="text-white hover:text-gray-200 flex gap-1 items-center">
          <FaComment/> Chat
        </a>
        <Link to="/login" className="text-white hover:text-gray-200 flex gap-1 items-center">
          <FaUser/> Login
        </Link>
        <button className="bg-yellow-500 text-white font-bold py-1 px-4 rounded hover:bg-yellow-600">
          POST FREE AD
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
