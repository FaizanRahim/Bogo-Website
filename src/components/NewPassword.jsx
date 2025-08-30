import React, { useState } from "react";
import logo from "../assets/logo.png"; // Easistar logo
import eyeIcon from "../assets/Eye Open.png"; // Eye icon
import signin from "../assets/signin.png"; // Right side illustration

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Password strength check (very simple logic, you can expand)
  const getStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-12 lg:p-16">
        <div className="w-full max-w-md bg-[#0d0d0d] p-6 sm:p-8 rounded-xl shadow-lg">
          {/* Logo */}

          <div className="flex items-center gap-2 mb-6">
            <img
              src={logo}
              alt="Easistar Logo"
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
            <span className="font-semibold text-lg sm:text-xl">Easistar</span>
          </div>

          {/* Back Arrow */}
          <button
            aria-label="Go back"
            className="mb-6 text-gray-500 hover:text-gray-300 text-lg sm:text-xl"
          >
            ←
          </button>
          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Create New Password
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            Send your email account to reset password and make new password
          </p>

          {/* Password Input */}
          <label className="block mb-1 text-sm">Password</label>
          <div className="relative mb-3">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Input your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            >
              <img src={eyeIcon} alt="Toggle visibility" className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-500 text-xs mb-4">
            Min 8 characters with a combination of letters and numbers
          </p>
          {/* Password strength meter */}
          <div className="flex gap-1 mb-5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded ${
                  getStrength() >= i ? "bg-green-500" : "bg-gray-700"
                }`}
              ></div>
            ))}
          </div>

          {/* Confirmation Password */}
          <label className="block mb-1 text-sm">Confirmation Password</label>
          <div className="relative mb-6">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Input your password"
              className="w-full p-3 rounded border border-gray-700 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            >
              <img src={eyeIcon} alt="Toggle visibility" className="w-5 h-5" />
            </button>
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

      {/* Right Section - Dashboard Image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6">
        <img
          src={signin}
          alt="Dashboard Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
