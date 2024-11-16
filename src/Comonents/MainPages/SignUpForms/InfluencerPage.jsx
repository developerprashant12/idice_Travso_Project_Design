/* eslint-disable react/prop-types */
/* This is Signup step 2 */

import backgroundImage from "../../../assets/influencerImage.png";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const InfluencerPage = ({
  formData,
  formDataError,
  handleInputChange,
  handleInfluencerType,
  handleNext,
  handleBackStep
}) => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };

  const handleNextStep2 = async () => {
    handleNext();
  };

  // const handleBack = async() => {

  // }

  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-gradient-to-b from-teal-50 to-teal-100">
      {/* Left Section */}
      <div
        className="md:flex-[1.5] bg-cover bg-center relative md:rounded-r-[50px] overflow-hidden min-h-[50vh] md:min-h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-8 left-8 md:top-12 md:left-12 md:ml-10">
          <img
            src={logo}
            alt="Travso Logo"
            className="w-32 md:w-40 cursor-pointer"
            onClick={handleLogo}
          />{" "}
          {/* Logo size and responsiveness */}
        </div>
        <div className=" absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white text-left md:ml-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Connect with the <br /> Global Travel Tribe
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Become part of an energetic community of explorers just like you.
            Dive into
            <br /> lively discussions, discover hidden gems, share travel hacks,
            and make <br />
            lifelong friends with adventurers from every corner of the world.
          </p>
          <div className="flex justify-between items-center mt-8">
            <span className="text-sm">02 — 03</span>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-0.5 bg-white"></div> {/* Center line */}
              <div className="flex space-x-6">
                <span className="text-white">1</span>
                <span className="text-white">2</span>
                <span className="text-white">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-[1] flex flex-col justify-center items-center justify-center min-h-[50vh] md:min-h-full">
        <div className="rounded-lg w-11/12 md:w-3/4 lg:w-3/5">
          <h2 className="text-[36px] font-semibold mb-4 mt-12 text-center font-poppins text-customBlack">
            Signing in
          </h2>
          <p className="flex justify-between items-center mt-4">
            <span className="text-sm text-customBlack">
              Are you an influencer?
            </span>
            <div className="space-x-2">
              <button
                className={`py-1 px-4 ${formData.isInfluencer ? 'bg-teal-400' : 'bg-gray-300' } text-white rounded-lg hover:bg-teal-500 transition`}
                onClick={() => handleInfluencerType(true)}
              >
                Yes
              </button>
              <button
                className={`py-1 px-4  ${!formData.isInfluencer ? 'bg-teal-400' : 'bg-gray-300' } text-customBlack rounded-lg hover:bg-gray-400 transition`}
                onClick={() => handleInfluencerType(false)}
              >
                No
              </button>
            </div>
          </p>
          {formData.isInfluencer && (
            <div>
              <input
                type="text"
                name="smlink1"
                value={formData?.smlink1 || ""}
                placeholder="Socail Media Link 1"
                onChange={handleInputChange}
                className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack mt-3"
              />
              <input
                type="text"
                name="smlink2"
                value={formData?.smlink2 || ""}
                placeholder="Socail Media Link 2"
                onChange={handleInputChange}
                className="w-full p-2 border border-[#2DC6BE] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:font-poppins placeholder:text-customBlack mt-3"
              />
              {formDataError.smLinkError && (
                <p className="error">{formDataError.smLinkError}</p>
              )}
            </div>
          )}
          <div className="flex">
            <button
              type="submit"
              className="mt-5 mb-14 w-full py-2 bg-teal-400 text-[white] font-semibold rounded-lg hover:bg-teal-500 transition"
              onClick={handleBackStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="mb-14 w-full py-2 bg-teal-400 text-[white] font-semibold rounded-lg hover:bg-teal-500 transition"
              onClick={handleNextStep2}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;
