import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10 pb-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div>
          <h2 className="font-semibold mb-4">More from Bikroy</h2>
          <ul>
            <li>Sell Fast</li>
            <li>Membership</li>
            <li>Banner Ads</li>
            <li>Boost Ad</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Help & Support</h2>
          <ul>
            <li>FAQ</li>
            <li>Stay safe</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">About Bikroy</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Blog & Guides</h2>
          <ul>
            <li>CarsGuide</li>
            <li>BikesGuide</li>
            <li>PropertyGuide</li>
            <li>Official Blog</li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Download our app</h2>
          <div className="flex space-x-2">
            <img
              src="https://img.icons8.com/color/48/000000/google-play.png"
              alt="Google Play"
              className="w-24"
            />
            <img
              src="https://img.icons8.com/color/48/000000/apple-app-store.png"
              alt="App Store"
              className="w-24"
            />
          </div>
          <div className="mt-4">
            <p>Other countries</p>
            <p>Sri Lanka</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4">
        <p className="text-center text-sm">
          © 2024. All rights reserved. Saltside Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
