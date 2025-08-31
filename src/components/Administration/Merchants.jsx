import { useState } from "react";
import { Plus, Camera } from "lucide-react";

export default function Merchants() {
  const [profileImg, setProfileImg] = useState(
    "https://i.pravatar.cc/150?img=10"
  );

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      {/* Profile Upload */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src={profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
          />
          <button className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full">
            <Camera size={16} className="text-white" />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-400">Photo Profile</p>
      </div>

      {/* Form */}
      <form className="w-full max-w-3xl space-y-6">
        <h2 className="text-lg font-medium">employee</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nickname"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Gender"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Row 4 - Biographical */}
        <textarea
          placeholder="Biographical"
          rows="3"
          className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
        ></textarea>

        {/* Row 5 */}
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="page view"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="enclose"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Role"
            className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Add new page */}
        <div>
          <p className="mb-2">Add new page</p>
          <button
            type="button"
            className="bg-green-600 p-2 rounded-full flex items-center justify-center"
          >
            <Plus size={18} className="text-white" />
          </button>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-black font-medium"
          >
            add employee
          </button>
        </div>
      </form>
    </div>
  );
}

