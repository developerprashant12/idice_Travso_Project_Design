import React, { useState, useEffect } from "react";
import Boy1 from "../../../assets/headerIcon/boy1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faImage,
  faSmile,
  faUser,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import Travel from "../../../assets/travel.png";
import First from "../../../assets/1.png";
import BucketImageSecond from "../../../assets/bucketimageSecond.png";
import Dialog from "../../../assets/Dialog.png";
import entypo_bucket from "../../../assets/entypo_bucket.png";

import like from "../../../assets/like.png";
import Saved from "../../../assets/headerIcon/archive-minus.png";
import send from "../../../assets/headerIcon/send.png";
import Girl from "../../../assets/headerIcon/girl.jpg";
import "../Header.css";
import SavedPopup from "./SavedPopup";
import leftIcon from "../../../assets/lefticon.png";
import dotThree from "../../../assets/dotThree.png";
import chevron_down from "../../../assets/chevron-down.png";
import dots_vertical from "../../../assets/dots-vertical.png";
import noto_fire from "../../../assets/noto_fire.png";
import face_smile from "../../../assets/face_smile.png";
import Send from "../../../assets/Send.png";
import trash from "../../../assets/trash.png";
import alert from "../../../assets/alert.png";

const CommentPopup = ({ isOpen, onClose }) => {

  // State for handling "See more"
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  // const [isSavedPopup, setIsSavedPopup] = useState(false);
  // console.log("isSavedPopup", isSavedPopup);
  const [dropdownOpenSetting, setDropdownOpenSetting] = useState(false);

  const toggleSetting = () => {
    setDropdownOpenSetting(!dropdownOpenSetting);
  };

  // Function to toggle the full text
  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  // Sample data for the popup
  const postDetails = {
    title: "Pankaj Reet Tech",
    subtitle: "Solo Traveler",
    subtitleData: "Rameswaram",
    description:
      "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: [Travel, BucketImageSecond, First],
    avtar: Boy1,
    hastag: "#arsitek #art #creative",
  };

  const images = postDetails.image;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Disable body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[1040px] md:w-[1040px] h-[640px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-4 sticky top-0 bg-white z-10">
          <h2 className="font-poppins font-semibold text-[#212626] text-[24px]">
            Comment section
          </h2>
          <button
            className="text-black hover:text-[#2DC6BE] font-bold text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Section */}
          <div className="w-3/5 px-6 py-4 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between space-x-4 mb-1 pb-2 ">
              <div className="flex items-center gap-2">
                <img
                  src={postDetails.avtar}
                  alt="Avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-poppins font-semibold text-left text-[16px] text-[#212626]">
                    {postDetails.title}
                  </h3>
                  <p className="-mt-1 font-inter font-medium text-left text-[12px] text-[#667877]">
                    {postDetails.subtitle} • {postDetails.subtitleData}
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={dotThree}
                  alt="dotThree"
                  className="h-4 object-cover"
                />
              </div>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-hidden">
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Slider */}
                <div className="overflow-hidden relative">
                  <div>
                    <img
                      src={images[currentIndex]}
                      alt={`Slide ${currentIndex}`}
                      className="rounded-lg w-full h-[344px] object-cover transition duration-500"
                    />
                  </div>
                </div>

                {/* Left Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center"
                >
                  <img src={leftIcon} alt="leftIcon" className="" />
                </button>

                {/* Right Button */}
                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 w-9 h-9 transform -translate-y-1/2 bg-[#EEF0F299] text-white rounded-full hover:bg-[#2DC6BE] flex items-center justify-center rotate-180"
                >
                  <img src={leftIcon} alt="leftIcon" className="" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 mx-1 rounded-full transform transition-transform duration-300 ${
                        index === currentIndex
                          ? "bg-[#2DC6BE] scale-150"
                          : "bg-[#869E9D] hover:bg-[#2DC6BE] scale-100"
                      } cursor-pointer`}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Post Description */}
              <p className="font-inter font-medium text-[14px] text-[#212626] text-left text-justify mb-1">
                {isFullTextVisible
                  ? postDetails.description
                  : `${postDetails.description.slice(0, 170)}...`}
                <span
                  onClick={toggleFullText}
                  className="text-[#2DC6BE] cursor-pointer"
                >
                  {isFullTextVisible ? " Show less" : " See more"}
                </span>
              </p>

              {/* Hashtags */}
              <p className="text-left text-[#1DB2AA] mb-2">
                {postDetails.hastag}
              </p>
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="flex items-center justify-between">
              <ul className="flex gap-2">
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  72K Love &nbsp; &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  50K comments &nbsp; &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  2.3K Bucket listed &nbsp; &nbsp;{" "}
                  <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>
                </li>
                <li className="flex items-center font-inter font-medium text-[12px] text-[#667877] ">
                  1K Shared &nbsp; &nbsp;
                </li>
              </ul>
              <p className="font-inter font-medium text-[12px] text-[#667877] ">
                {" "}
                12 Oct 2024{" "}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full hover:bg-[#2DC6BE] hover:text-white"
              >
                <img src={like} alt="like" className="mr-2 w-[20px] h-[20px]" />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Liked
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img
                  src={Dialog}
                  alt="dialog"
                  className="mr-1 w-[20px] h-[20px]"
                />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Comment
                </span>
              </button>

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full relative"
                // onClick={() => setIsSavedPopup(true)}
              >
                <img
                  src={entypo_bucket}
                  alt="saved"
                  className="mr-1 w-[20px] h-[20px]"
                />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  Bucket List
                </span>
              </button>
              {/*--------------- Saved Popup ----------------*/}
              {/* {isSavedPopup && (
                <SavedPopup onClose={() => setIsSavedPopup(false)} />
              )} */}

              <button
                aria-label="Edit Info"
                className="flex items-center justify-center w-[130px] h-[36px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-2 rounded-full "
              >
                <img src={send} alt="send" className="mr-2 w-[20px] h-[20px]" />
                <span className="font-inter font-medium text-[14px] text-[#212626]">
                  {postDetails.share} Share
                </span>
              </button>

              {/* <SavedPopup
                isOpenSaved={isSavedPopup}
                onCloseSaved={() => setIsSavedPopup(false)}
              /> */}
            </div>
            {/* Bottom Fixed Section */}
          </div>

          {/* Right Section - Post Activity */}
          <div className="w-2/5 px-6 py-4 h-full border-l border-gray-100 flex flex-col justify-between">
            {/* Top Fixed Section */}
            <div className="flex items-center justify-between sticky top-0 bg-white z-10 cursor-pointer">
              <h3 className="font-poppins font-semibold text-[20px] text-[#212626]">
                Comments (50)
              </h3>
            </div>
            {/* Top Fixed Section */}

            {/*---------- Scrollable Part ---------*/}
            <div className="flex-1 overflow-y-auto scrollbar-thin space-y-4">
              <div className="mt-6">
                {/* Parent Comment Reaction */}
                <div className="flex items-start space-x-3 rounded-md">
                  {/* Profile Image */}
                  <img src={Girl} alt="User" className="w-8 h-8 rounded-full" />

                  {/* Content Section */}
                  <div className="w-full flex flex-col space-y-2">
                    {/* Comment Content */}
                    <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                      <div className="flex items-center justify-between">
                        <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                          Joana Almeida &nbsp;{" "}
                          <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                          &nbsp;{" "}
                          <span className="font-inter font-medium text-[16px] text-[#667877]">
                            4 hrs ago
                          </span>
                        </p>
                        <img
                          src={dots_vertical}
                          alt="dots_vertical"
                          className="w-[24px] h-[24px] cursor-pointer"
                          onClick={toggleSetting}
                        />
                        {/* DropdownSetting Menu */}
                        {dropdownOpenSetting && (
                          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#ddd] rounded-md rounded-[16px] shadow-md w-[200px]">
                            <div className="flex items-center justify-between p-2 px-4 ">
                              <h6 className="font-poppins font-semibold text-[16px] text-[#212626]">
                                More Options
                              </h6>

                              {/* Close Button (X) */}
                              <button
                                className="hover:text-[#2DC6BE] font-poppins font-semibold text-[16px] text-[#212626]"
                                onClick={() => setDropdownOpenSetting(false)}
                                aria-label="Close"
                              >
                                &#x2715;
                              </button>
                            </div>
                            <ul>
                              <li className="font-inter font-medium text-[16px] text-[#212626] px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={alert}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Report comment
                              </li>
                              <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={trash}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Delete comment
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <p className="font-inter font-medium text-[14px] text-[#212626] text-left">
                        Nice View 🎉
                      </p>
                    </div>

                    {/* Interaction Section */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={noto_fire}
                            alt="noto_fire"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            62 likes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img src={Dialog} alt="Dialog" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            10 replies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Parent Comment Reaction */}
              </div>
              <div className="mt-4 ml-8">
                {/* Child Comment Reaction */}
                <div className="flex items-start space-x-3 rounded-md">
                  {/* Profile Image */}
                  <img src={Girl} alt="User" className="w-8 h-8 rounded-full" />

                  {/* Content Section */}
                  <div className="w-full flex flex-col space-y-2">
                    {/* Comment Content */}
                    <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                      <div className="flex items-center justify-between">
                        <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                          Joana Almeida &nbsp;{" "}
                          <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                          &nbsp;{" "}
                          <span className="font-inter font-medium text-[16px] text-[#667877]">
                            4 hrs ago
                          </span>
                        </p>
                        <img
                          src={dots_vertical}
                          alt="dots_vertical"
                          className="w-[24px] h-[24px]"
                        />
                      </div>

                      <p className="font-inter font-medium text-[14px] text-[#212626] text-left">
                        Nice View 🎉
                      </p>
                    </div>

                    {/* Interaction Section */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={noto_fire}
                            alt="noto_fire"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            62 likes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img src={Dialog} alt="Dialog" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            10 replies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child Comment Reaction */}
              </div>

              <div className="mt-6">
                {/* Parent Comment Reaction */}
                <div className="flex items-start space-x-3 rounded-md">
                  {/* Profile Image */}
                  <img src={Girl} alt="User" className="w-8 h-8 rounded-full" />

                  {/* Content Section */}
                  <div className="w-full flex flex-col space-y-2">
                    {/* Comment Content */}
                    <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                      <div className="flex items-center justify-between">
                        <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                          Joana Almeida &nbsp;{" "}
                          <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                          &nbsp;{" "}
                          <span className="font-inter font-medium text-[16px] text-[#667877]">
                            4 hrs ago
                          </span>
                        </p>
                        <img
                          src={dots_vertical}
                          alt="dots_vertical"
                          className="w-[24px] h-[24px] cursor-pointer"
                          onClick={toggleSetting}
                        />
                        {/* DropdownSetting Menu */}
                        {dropdownOpenSetting && (
                          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#ddd] rounded-md rounded-[16px] shadow-md w-[200px]">
                            <div className="flex items-center justify-between p-2 px-4 ">
                              <h6 className="font-poppins font-semibold text-[16px] text-[#212626]">
                                More Options
                              </h6>

                              {/* Close Button (X) */}
                              <button
                                className="hover:text-[#2DC6BE] font-poppins font-semibold text-[16px] text-[#212626]"
                                onClick={() => setDropdownOpenSetting(false)}
                                aria-label="Close"
                              >
                                &#x2715;
                              </button>
                            </div>
                            <ul>
                              <li className="font-inter font-medium text-[16px] text-[#212626] px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={alert}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Report comment
                              </li>
                              <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={trash}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Delete comment
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <p className="font-inter font-medium text-[14px] text-[#212626] text-left">
                        Nice View 🎉
                      </p>
                    </div>

                    {/* Interaction Section */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={noto_fire}
                            alt="noto_fire"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            62 likes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img src={Dialog} alt="Dialog" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            10 replies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Parent Comment Reaction */}
              </div>

              <div className="mt-6">
                {/* Parent Comment Reaction */}
                <div className="flex items-start space-x-3 rounded-md">
                  {/* Profile Image */}
                  <img src={Girl} alt="User" className="w-8 h-8 rounded-full" />

                  {/* Content Section */}
                  <div className="w-full flex flex-col space-y-2">
                    {/* Comment Content */}
                    <div className="flex flex-col bg-[#EEF0F29C] p-2 rounded-[12px] w-full">
                      <div className="flex items-center justify-between">
                        <p className="flex items-center font-inter font-medium text-[#212626] text-[16px] text-left">
                          Joana Almeida &nbsp;{" "}
                          <div className="w-[4px] h-[4px] bg-[#869E9D] rounded-full"></div>{" "}
                          &nbsp;{" "}
                          <span className="font-inter font-medium text-[16px] text-[#667877]">
                            4 hrs ago
                          </span>
                        </p>
                        <img
                          src={dots_vertical}
                          alt="dots_vertical"
                          className="w-[24px] h-[24px] cursor-pointer"
                          onClick={toggleSetting}
                        />
                        {/* DropdownSetting Menu */}
                        {dropdownOpenSetting && (
                          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-[#ddd] rounded-md rounded-[16px] shadow-md w-[200px]">
                            <div className="flex items-center justify-between p-2 px-4 ">
                              <h6 className="font-poppins font-semibold text-[16px] text-[#212626]">
                                More Options
                              </h6>

                              {/* Close Button (X) */}
                              <button
                                className="hover:text-[#2DC6BE] font-poppins font-semibold text-[16px] text-[#212626]"
                                onClick={() => setDropdownOpenSetting(false)}
                                aria-label="Close"
                              >
                                &#x2715;
                              </button>
                            </div>
                            <ul>
                              <li className="font-inter font-medium text-[16px] text-[#212626] px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={alert}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Report comment
                              </li>
                              <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-[#f0f0f0]">
                                <img
                                  src={trash}
                                  alt="alert"
                                  className="w-[20px] h-[20px] cursor-pointer mr-2"
                                />{" "}
                                Delete comment
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <p className="font-inter font-medium text-[14px] text-[#212626] text-left">
                        Nice View 🎉
                      </p>
                    </div>

                    {/* Interaction Section */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={noto_fire}
                            alt="noto_fire"
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            62 likes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img src={Dialog} alt="Dialog" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center">
                          <p className="font-inter font-medium text-[12px] text-[#415365] text-left">
                            10 replies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Parent Comment Reaction */}
              </div>
            </div>
            {/*---------- Scrollable Part ---------*/}

            {/* Bottom Fixed Section */}
            <div className="mt-3">
              <div className="flex items-center gap-2">
                {/* Profile Image */}
                <img
                  src={Girl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex items-center bg-gray-200 py-2 pl-2 rounded-full w-[100%]">
                  <img
                    src={face_smile}
                    alt="smile"
                    className="cursor-pointer"
                  />
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-2 text-sm"
                  />

                  {/* Icons */}
                  <div className="flex items-center justify-center space-x-3 text-gray-400">
                    <button className="hover:text-gray-600">
                      <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
                    </button>
                    <button className="">
                      <img src={Send} className="w-[44px] h-[44px] -my-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Fixed Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
