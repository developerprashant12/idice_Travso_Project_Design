import React, { useState } from "react";
import Header from "./Header";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const EditProfile = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the uploaded image as the source
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImageSrc(null); // Reset the uploaded image
  };

  return (
    <>
      <Header />

      {/* Main Wrapper with Gradient Background */}
      <div className="bg-gradient-to-b from-teal-50 to-teal-200 min-h-screen">
        {/* Centered Heading */}
        <h2 className="p-8 text-2xl font-bold text-black-400 text-center">
          Profile Setup
        </h2>

        <div className="flex items-center justify-center">
          <div className="bg-white w-full max-w-[97%] rounded-lg relative mb-6 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            {/* Cover Photo Upload */}
            <div className="relative bg-gray-100 border-0 border-dashed border-gray-300 rounded-lg h-[515px] flex justify-center items-center w-full">
              <div className="flex-col">
                <p className="text-gray-500 text-xl mb-2">
                  <AttachFileIcon className="mr-2" /> Upload Cover Photo
                  (optional)
                </p>
                <div className="flex items-center justify-center gap-x-2">
                  {" "}
                  {/* Use gap-x-2 for horizontal spacing */}
                  <button className="bg-[#2DC6BE] text-white py-1 px-3 mb-2 rounded-lg">
                    Upload Cover Photo
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 mb-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>

              {/* Profile Photo and Badge Overlap */}
              <div className="absolute bottom-[-90px] left-16 bg-gray-100 border-2 border-gray-300 rounded-full h-56 w-56 flex justify-center items-center overflow-hidden group">
                {/* Image or Default Placeholder */}
                <label
                  htmlFor="profile-upload"
                  className="relative w-full h-full cursor-pointer flex justify-center items-center"
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center h-full text-gray-500">
                      <AttachFileIcon className="mr-2" />
                      <p>Upload Profile Photo</p>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
                    <button
                      className="bg-[#2DC6BE] text-white py-1 px-3 mb-2 rounded-full"
                      onClick={() =>
                        document.getElementById("profile-upload").click()
                      }
                    >
                      Upload
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-full"
                      onClick={handleImageDelete}
                    >
                      Delete
                    </button>
                  </div>
                </label>

                {/* Hidden File Input */}
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              <button className="absolute bottom-[-20px] right-8 bg-[#2DC6BE] text-white py-2 px-10 rounded-md">
                Add Badge*
              </button>
            </div>

            {/* Form Section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 p-12">
              <div>
                <label className="block text-gray-600 text-base font-medium mb-2 float-left">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DC6BE] bg-gray-100 text-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-base font-medium mb-2 float-left">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DC6BE] bg-gray-100 text-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-base font-medium mb-2 float-left">
                  Gender
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DC6BE] bg-gray-100 text-gray-500">
                  <option>Your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 text-base font-medium mb-2 float-left">
                  City
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DC6BE] bg-gray-100 text-gray-500">
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Ratlam</option>
                  <option>Ujjain</option>
                </select>
              </div>
            </div>

            {/* Description Box */}
            <div className="p-12">
              <label className="block text-gray-600 text-base font-medium mb-2 float-left">
                Description
              </label>
              <textarea
                placeholder="Your Story in 50 words..."
                rows="3"
                className="bg-gray-100 text-gray-500 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DC6BE]"
              ></textarea>
            </div>

            {/* Save Button */}
            <div className="p-10 text-center">
              <button className="bg-[#2DC6BE] text-white py-2 px-10 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
