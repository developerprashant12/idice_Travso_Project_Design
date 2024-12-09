import React from "react";
import Header from "../Header";
import profilePhoto from "../../../assets/VideoCallPage/profilePhoto.png";
import Sidebarimage from "../../../assets/chatpageimages/Sidebarimage1.png";
import Sidearimage2 from "../../../assets/chatpageimages/Sidebarimage2.png";
import Sidearimage3 from "../../../assets/chatpageimages/Sidebarimage3.png";
import Sidearimage4 from "../../../assets/chatpageimages/Sidebarimage4.png";
import Sidearimage5 from "../../../assets/chatpageimages/Sidebarimage5.png";
import p1 from "../../../assets/headerIcon/p1.png";
import p3 from "../../../assets/headerIcon/p3.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import image from "../../../assets/VideoCallPage/image.png";
import BottomImage from "../../../assets/VideoCallPage/BottomImage.png";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import RadioButtonCheckedSharpIcon from "@mui/icons-material/RadioButtonCheckedSharp";

const VideoCallPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row bg-[#F0F7F7] px-3 pt-3 gap-3">
        {/* Left Content */}
        <div className="w-full md:w-[2/5] lg:w-[420px] bg-white shadow-md flex flex-col md:h-[calc(100vh_-_120px)] md:overflow-y-auto xl:h-[calc(100vh_-_96px)] overflow-y-auto  rounded-t-2xl">
          {/* Left Sidebar Header */}
          <div className="p-6 pb-0 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h2 className="xl:text-2xl md:font-poppins xl:font-poppins xl:font-bold font-semibold md:text-xl">
                Messages
              </h2>
            </div>
            <span className="text-gray-400 text-medium font-medium   flex items-center justify-center">
              <button>Requests</button>
            </span>
          </div>

          {/* Left Sidebar Search Box */}
          <div className="p-6 pt-3 pb-2">
            <div className="flex items-center bg-[#F0F7F7] rounded-3xl px-4 py-3 ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M15.5217 15.7832L20.7391 21.0006"
                  stroke="#869E9D"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.26087 17.5217C13.8232 17.5217 17.5217 13.8232 17.5217 9.26087C17.5217 4.69852 13.8232 1 9.26087 1C4.69852 1 1 4.69852 1 9.26087C1 13.8232 4.69852 17.5217 9.26087 17.5217Z"
                  stroke="#869E9D"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                placeholder="Search...."
                className="w-full font-inter font-medium text-[16px]  bg-transparent text-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Tabs (Chats and Request) */}

          {/* Chats Section */}
          <div className="flex-1 overflow-y-auto scrollbar-hidden  p-4 pl-6 space-y-2">
            {/* Example Chat Items */}
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Rahul Tiwari
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">
                  my name is rahul sharma what is
                </p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>
            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            <div className="flex items-center bg-teal-50 hover:bg-teal-100 p-3 rounded-lg">
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full xl:w-10 xl:h-10 mr-3 md:w-8 md:h-8"
              />
              <div className="flex-1">
                <p className="xl:text-base xl:font-semibold md:text-sm md:font-semibold flex items-center md:text-nowrap">
                  Pankaj Reet Tech
                  <img src={p1} alt="Icon" className="ml-2 w-4 h-4" />
                </p>
                <p className="text-sm text-gray-500 float-left">wooooo🥰</p>
              </div>
              <span className="text-sm text-gray-400">24m</span>
            </div>

            {/* Repeat other chat items */}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col bg-white mb-4 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {/* Profile Image */}
              <img
                src={profilePhoto}
                alt="User"
                className="rounded-full w-10 h-10 mr-3"
              />

              {/* Name and Status */}
              <div className="">
                <p className="font-medium text-lg flex items-center">
                  Pankaj Reet Tech
                  {/* Add Two Small Icons */}
                  <img
                    src={p1} // Replace with your first image URL or import
                    alt="Icon 1"
                    className="w-4 h-4 ml-2"
                  />
                  <img
                    src={p3} // Replace with your second image URL or import
                    alt="Icon 2"
                    className="w-4 h-4 ml-1"
                  />
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <FiberManualRecordIcon
                    className="text-green-500"
                    style={{ fontSize: "16px" }}
                  />
                  <span className="ml-1">Online</span>
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* Call Button */}
              <button className="bg-gray-300 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <span className="text-white">
                  <LocalPhoneIcon style={{ fontSize: "24px", color: "teal" }} />
                </span>
                <span className="text-black">Call</span>
              </button>

              {/* Video Button */}
              <button className="bg-gray-300 text-white px-4 py-2 rounded-md flex items-center space-x-2 hidden">
                <span className="text-white">
                  <VideocamOutlinedIcon
                    style={{ fontSize: "20px", color: "teal" }}
                  />
                </span>
                <span className="text-black">Video</span>
              </button>
            </div>
          </div>

          {/* Large Image Section */}
          <div className="flex-1 flex flex-col items-center justify-between p-4">
            {/* Main Video */}
            <div className="relative w-full h-[calc(100vh_-_280px)] flex items-center justify-center">
              {/* Main Video Image */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={image}
                alt="Main"
              />

              {/* Top Left - Record Icon with Timer */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-gray-400 bg-opacity-50 text-white px-6 py-4 rounded-full">
                <RadioButtonCheckedSharpIcon style={{ color: "red" }} />
                <span className="text-xl font-semibold">24:01:45</span>
              </div>

              {/* Top Right - Screen Resize Icon */}
              <div className="absolute top-4 right-4">
                <button className="bg-white bg-opacity-50 p-4 rounded-full shadow-md">
                  <FullscreenRoundedIcon
                    style={{ fontSize: "24px", color: "black" }}
                  />
                </button>
              </div>

              {/* Bottom Right - Linear Sound Icon */}
              <div className="absolute bottom-4 right-4">
                <button className="bg-white bg-opacity-50 p-4 rounded-full shadow-md">
                  <GraphicEqRoundedIcon
                    style={{ fontSize: "24px", color: "black" }}
                  />
                </button>
              </div>

              {/* Bottom Video Box */}
              <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-md flex items-center ">
                {/* Bottom Video Image */}
                <img
                  src={BottomImage} // Add the small image URL
                  alt="Durgesh Sharma"
                  className="w-60 h-40 rounded-xl object-cover"
                />

                {/* Mic Icon Inside the Image */}
                <div className="absolute bottom-2 right-2 bg-teal-500 rounded-full p-2 shadow-md">
                  <MicOffRoundedIcon
                    style={{ fontSize: "20px", color: "white" }}
                  />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-md flex items-center ">
                {/* Bottom Video Image */}
                <img
                  src={BottomImage} // Add the small image URL
                  alt="Durgesh Sharma"
                  className="w-60 h-40 rounded-xl object-cover"
                />

                {/* Mic Icon */}
                <div className="absolute bottom-2 right-2 bg-teal-500 rounded-full p-2 shadow-md">
                  <MicOffRoundedIcon
                    style={{ fontSize: "20px", color: "white" }}
                  />
                </div>

                {/* Text on Image */}
                <div className="absolute bottom-4 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded-lg">
                  Durgesh Sharma
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="flex  space-x-4 justify-between">
              <div className="flex justify-center space-x-3 flex-grow">
                {/* Left Group of Buttons */}
                <button className="bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center ">
                  <MicNoneOutlinedIcon
                    style={{ fontSize: "24px", color: "white" }}
                  />
                </button>
                <button className="bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <VideocamIcon style={{ fontSize: "24px", color: "white" }} />
                </button>
                <button className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                  <SmsRoundedIcon style={{ fontSize: "24px", color: "teal" }} />
                </button>
                <button className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                  <MoreHorizRoundedIcon
                    style={{ fontSize: "24px", color: "teal" }}
                  />
                </button>
              </div>

              {/* End Call Button */}
              <button className="bg-red-700 rounded-full w-28 h-12 flex items-center justify-center ml-4 ">
                <span className="text-white font-medium">End Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCallPage;
