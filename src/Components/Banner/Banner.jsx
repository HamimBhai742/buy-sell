import React from "react";
import { FaMapMarker, FaSearch } from "react-icons/fa";

const SearchBanner = () => {
  return (
    <div className="bg-teal-600 p-4 flex justify-center items-center flex-col gap-5">
      {/* Location selector */}
      <div className="bg-teal-700 text-white px-4 py-2 rounded-full flex gap-3 items-center mr-4">
       <FaMapMarker/>
        <span>All of Bangladesh</span>
      </div>

      {/* Search bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-96 px-4 py-2 rounded-full focus:outline-none placeholder-gray-400 text-gray-600"
        />
        <button className="absolute right-2 bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-600">
          <FaSearch/>{/* Search icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchBanner;
