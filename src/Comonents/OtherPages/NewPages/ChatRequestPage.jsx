import React from "react";
import Header from "../Header";
import profilePhoto from "../../../assets/profilePhoto.png";
import Sidebarimage from "../../../assets/chatpageimages/Sidebarimage1.png";
import Sidearimage2 from "../../../assets/chatpageimages/Sidebarimage2.png";
import Sidearimage3 from "../../../assets/chatpageimages/Sidebarimage3.png";
import Sidearimage4 from "../../../assets/chatpageimages/Sidebarimage4.png";
import Sidearimage5 from "../../../assets/chatpageimages/Sidebarimage5.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import p1 from "../../../assets/./headerIcon/p1.png";
import p3 from "../../../assets/./headerIcon/p3.png"; 

const ChatRequestPage = () => {
  return (
    <>
      <Header />
      <div className="flex  bg-gray-100 px-6 mt-4 ">
        <div className="w-1/4 bg-white shadow-md flex flex-col h-[calc(100vh_-_72px)] overflow-y-auto  ">
          {/* Left Sidebar Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold">Messages</h2>
              <KeyboardArrowDownIcon className="text-black mt-1" />
            </div>
            <span className="text-black text-sm font-bold bg-gray-200 border rounded-full h-6 w-6 flex items-center justify-center">
              18
            </span>
          </div>

          {/* Left Sidebar Search Box */}
          <div className="p-2">
            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3 hover:border-teal-500 transition">
              <SearchIcon className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full bg-transparent text-gray-500 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Tabs (Chats and Request) */}
          <div className="flex border-b p-2 space-x-2 ">
            <button className=" text-gray-500 hover hover:text-white hover:font-medium hover:bg-teal-400 flex items-center justify-center space-x-2 flex-1 text-center py-2 font-medium  rounded-xl">
              <span>Chats</span>
              <span className="text-black text-sm font-medium bg-gray-200 rounded-full px-2 py-0.5">
                10
              </span>
            </button>
            <button className="bg-teal-400  text-white font-medium  flex items-center justify-center space-x-2 flex-1 text-center py-2  rounded-xl">
              <span>Request</span>
              <span className="text-black text-sm font-medium bg-gray-200 rounded-full px-2 py-0.5">
                8
              </span>
            </button>
          </div>

          {/* Chats Section */}
          <div className="flex-1 h-[calc(100vh_-_254px)] overflow-y-auto ">
            <div className="space-y-4 p-4">
              {/* Add Chat Items Here */}
              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={profilePhoto}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Pankaj Reet Tech
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">wooooo🔥</p>
                  </div>
                  <span className="text-sm text-gray-400">2d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col bg-teal-50 hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidebarimage}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Durgesh Sharma
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">This is amazing🥰</p>
                  </div>
                  <span className="text-sm text-gray-400">12PM today</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidearimage2}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Navneeth Maroli
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">Awww😊</p>
                  </div>
                  <span className="text-sm text-gray-400">1d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidearimage3}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Falguni Roy
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">Haha</p>
                  </div>
                  <span className="text-sm text-gray-400">3d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidearimage4}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Anubhav Tripathi
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">I like that 😊</p>
                  </div>
                  <span className="text-sm text-gray-400">4d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidearimage5}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Prashatnt Khanna
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">Haha oh man 🔥</p>
                  </div>
                  <span className="text-sm text-gray-400">6d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={profilePhoto}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Rahul Jain
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">Haha oh man 🔥</p>
                  </div>
                  <span className="text-sm text-gray-400">4d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>

              <div className="flex flex-col  hover:bg-teal-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={Sidearimage5}
                    alt="User"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium flex items-center">
                      Sidharth Jain
                      {/* Verification Icon */}
                    </p>
                    <p className="text-sm text-gray-500 float-left">Amazing</p>
                  </div>
                  <span className="text-sm text-gray-400">11d</span>
                </div>
                <div className="flex justify-start mt-2 space-x-2 ml-12 ">
                  <button className="px-4 py-2 hover  bg-green-200 text-green-700 font-semibold text-sm rounded-lg  ">
                   Accept
                  </button>
                  <button className="px-4 py-2 bg-red-200 text-red-700 font-semibold text-sm rounded-lg ">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ChatRequestPage;
