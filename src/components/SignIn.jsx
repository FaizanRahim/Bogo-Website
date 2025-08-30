import React, { useState } from "react";
import logo from "../assets/logo.png"; // Easistar icon logo
import eyeIcon from "../assets/Eye Open.png"; // Eye icon
import signinImage from "../assets/signin.png";

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Section - Login */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-12 lg:p-16">
        <div className="w-full max-w-md bg-[#0d0d0d] p-6 sm:p-8 rounded-xl shadow-lg text-white">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Easistar Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="font-semibold text-lg sm:text-xl">Easistar</span>
          </div>

          {/* Back Arrow */}
          <button
            aria-label="Go back"
            className="mb-6 text-gray-500 hover:text-gray-300 text-lg sm:text-xl"
          >
            ←
          </button>

          {/* Welcome Text */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
            Welcome to Easistar
          </h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Login to your account
          </p>

          {/* Email Input */}
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full p-3 mb-5 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password Input */}
          <label className="block mb-1 text-sm">Password</label>
          <div className="relative mb-5">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              aria-label="Toggle password visibility"
            >
              <img src={eyeIcon} alt="Toggle visibility" className="w-5 h-5" />
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-green-500 text-xs sm:text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 transition text-black font-semibold py-3 rounded mb-6 text-sm sm:text-base">
            Sign In
          </button>

          {/* Register Link */}
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Register
            </a>
          </p>

          {/* Footer */}
          <p className="text-gray-600 text-[10px] sm:text-xs text-center mt-10">
            ©2022 Managerin All Right Reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6">
        <img
          src={signinImage}
          alt="Signin Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
