import React from "react";
import { Link, Navigate } from "react-router-dom";

const categories = [
  { name: "Mobiles", ads: "72,271 ads", icon: "📱" },
  { name: "Electronics", ads: "55,147 ads", icon: "💻" },
  { name: "Vehicles", ads: "33,837 ads", icon: "🚗" },
  { name: "Property", ads: "18,167 ads", icon: "🏠" },
  { name: "Home & Living", ads: "17,720 ads", icon: "🛋️" },
  { name: "Pets & Animals", ads: "14,485 ads", icon: "🐾" },
  { name: "Women's Fashion & Beauty", ads: "7,984 ads", icon: "👗" },
  { name: "Men's Fashion & Grooming", ads: "7,969 ads", icon: "👕" },
  { name: "Hobbies, Sports & Kids", ads: "7,284 ads", icon: "⚽" },
  { name: "Business & Industry", ads: "3,252 ads", icon: "🏢" },
  { name: "Essentials", ads: "2,652 ads", icon: "🛒" },
  { name: "Education", ads: "2,551 ads", icon: "🎓" },
  { name: "Jobs", ads: "821 ads", icon: "💼" },
  { name: "Services", ads: "781 ads", icon: "🛠️" },
  { name: "Agriculture", ads: "754 ads", icon: "🌾" },
  { name: "Overseas Jobs", ads: "73 ads", icon: "🌍" },
];

const CategorySection = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-center text-xl font-semibold mb-6">
        Browse items by category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {categories.map((category, index) => (
            <Link to={`/product/${category.name}`}
            key={index}
            className="flex flex-col items-center text-center hover:cursor-pointer"
          >
            <div className="text-4xl">{category.icon}</div>
            <h3 className="text-gray-800 font-medium mt-2">{category.name}</h3>
            <p className="text-gray-500 text-sm">{category.ads}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
