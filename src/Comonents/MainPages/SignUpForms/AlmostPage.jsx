/* eslint-disable react/prop-types */
/* This is Signup step 3(final) */

import React, { useState } from "react";
import backgroundImage from "../../../assets/AlmostThere.png";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const AlmostPage = ({ formData, formDataError, handleInputChange, handleSubmit, handleBackStep}) => {
  const navigate = useNavigate();

  const handleLogo = () =>{
    navigate("/")
  }

  const testSubmit = async(e) => {
    handleSubmit(e);
  }

  return (
    <div className="flex flex-col md:flex-row  bg-gradient-to-b from-teal-50 to-teal-200 min-h-screen">
      {/* Left Section */}
      <div
        className="md:flex-[1.5] bg-cover bg-center relative md:rounded-r-[50px] overflow-hidden h-[50vh] md:h-auto"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-8 left-8 md:top-12 md:left-12 md:ml-10">
          <img src={logo} alt="Travso Logo" className="w-32 md:w-40 cursor-pointer" onClick={handleLogo} />{" "}
          {/* Logo size and responsiveness */}
        </div>
        <div className=" absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white text-left md:ml-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Craft Your Own <br /> Adventure Story
          </h1>
          <p className="mt-4 text-sm md:text-base hidden md:flex">
            Turn your travels into inspiration. Share your unique journey,
            capture
            <br /> imaginations, and leave a lasting legacy in the TravSo
            community. Each
            <br />
            story is a piece of the world—make yours unforgettable
          </p>
          <p className="mt-4 text-sm md:text-base flex md:hidden">
            Turn your travels into inspiration. Share your unique journey,
            capture imaginations, and leave a lasting legacy in the TravSo
            community. Each story is a piece of the world—make yours
            unforgettable.
          </p>
          <div className="flex items-center mt-8 space-x-4 w-[50%] gap-[30px]">
            <div className="flex-1 relative">
              <div className="w-full h-0.5 bg-gray-300"></div>{" "}
              {/* Full horizontal line */}
              <div
                className="absolute top-0 left-0 h-0.5 bg-white"
                style={{ width: "100%" }}
              ></div>{" "}
              {/* 100% filled portion */}
            </div>
            <span className="text-sm">03 — 03</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-[1] flex flex-col items-center min-h-[50vh] md:min-h-screen">
        <div className="rounded-lg w-11/12 md:w-3/4 lg:w-3/5 mb-10 mt-20">
          <h2 className="font-poppins text-[36px] font-semibold mb-4 mt-2 text-center text-customBlack">
            Almost there
          </h2>
          <form className="space-y-6" onSubmit={testSubmit}>
            <div>
              <input
                type="text"
                name="userName"
                placeholder="Unique ID"
                value={formData?.userName || ""}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
              />
              {formDataError.userName && <p className='error text-left text-[#ff0000] text-sm'>{formDataError.userName}</p>}
            </div>

            {/* <div>
              <textarea
                placeholder="Description"
                name="description"
                value={formData?.description || ""}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
                rows="4"
              ></textarea>
              {formDataError.description && <p className='error text-left text-[#ff0000] text-sm'>{formDataError.description}</p>}
            </div> */}

            <div>
              <input
                type="password"
                name="password"
                value={formData?.password || ""}
                onChange={handleInputChange}
                placeholder="Create Password"
                className="text-[#364045] w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
              />
              {formDataError.password && <p className='error text-left text-[#ff0000] text-sm'>{formDataError.password}</p>}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData?.confirmPassword || ""}
                onChange={handleInputChange}
                className="text-[#364045] w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-sans placeholder:font-normal placeholder:text-customBlack placeholder:text-[16px]"
              />
              {formDataError.confirmPassword && <p className='error text-left text-[#ff0000] text-sm'>{formDataError.confirmPassword}</p>}
            </div>
            <div className="flex justify-between">
            <button
              type="submit"
              className="font-roboto mt-2 w-[48%] py-2 border border-[#2DC6BE] bg-gradient text-teal-400 font-normal rounded-lg hover:bg-teal-500 hover:text-white transition"
              onClick={handleBackStep}
            >
             {'<'} Back
            </button>
            <button
              type="submit"
              className="font-roboto mt-2 w-[48%] py-2 bg-teal-400 text-[white] font-normal rounded-lg hover:bg-teal-500 transition"
            >
              Create
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlmostPage;
