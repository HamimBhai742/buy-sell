import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-100">
      <div className="w-full max-w-2xl p-10 space-y-8 bg-white shadow-2xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-teal-700">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600">
          Login to your account to access exclusive deals and offers.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="          font-semibold flex justify-start text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-semibold flex justify-start text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link  to="/sign-up" className="text-teal-700 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
