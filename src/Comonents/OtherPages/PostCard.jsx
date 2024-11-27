import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faUser,
  faPaperclip,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Girl from "../../assets/headerIcon/girl.jpg";
import Boy from "../../assets/headerIcon/boy2.jpg";
import Boywithgirl from "../../assets/headerIcon/boywithgirl.png";
import yellowgirl from "../../assets/headerIcon/yellowGirl.png";
import bucket from "../../assets/headerIcon/bucket.png";
import Dialog from "../../assets/headerIcon/Dialog.png";
import fire from "../../assets/headerIcon/fire.png";
import send from "../../assets/headerIcon/send.png";
import ok from "../../assets/headerIcon/ok.png";
import p1 from "../../assets/headerIcon/p1.png";
import p2 from "../../assets/headerIcon/p2.png";
import p3 from "../../assets/headerIcon/p3.png";

const posts = [
  {
    user: {
      name: "John Doe",
      avatar: Boy,
      time: "12 October at 09:00AM",
    },
    text: "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: Boywithgirl,
  },
  {
    user: {
      name: "Jane Smith",
      avatar: Boy,
      time: "12 October at 09:00AM",
    },
    text: "Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Et integer eget porttitor venenatis sed turpis ut eu. Viverra malesuada lorem sagittis risus aliquam urna duis.",
    image: yellowgirl,
  },
];

const PostCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center gap-1">
          {/* Profile Image */}
          <img src={Girl} alt="Profile" className="w-12 h-12 rounded-full" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Write your story today Ryan..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-3 text-sm"
          />

          {/* Icons */}
          <div className="flex items-center space-x-3 text-gray-400">
            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faImage} className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
            </button>
            <button className="hover:text-gray-600">
              <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-1 items-center justify-between">
              {/* Left Content */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-left">{post.user.name}</h3>

                  {/* Images beside h3 */}
                  <div className="flex space-x-1">
                    <img
                      src={p1}
                      alt="Image 1"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <img
                      src={p2}
                      alt="Image 2"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <img
                      src={p3}
                      alt="Image 3"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Time */}
                <p className="text-sm text-gray-500 text-left">
                  {post.user.time}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-gray-500 cursor-pointer"
              />
            </div>
          </div>
          <p className="mb-4 text-left">{post.text}</p>
          <p className="mb-3 text-left text-[#1DB2AA]">
            #arsitek #art #creative
          </p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full h-[548px] rounded-lg object-cover"
            />
          )}
          <div className="flex items-center justify-between mt-4">
            <button
              aria-label="Edit Info"
              className="flex items-center justify-center w-[197px] h-[40px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full hover:bg-[#2DC6BE] hover:text-white"
            >
              <img src={fire} alt="Edit Icon" className="mr-2 w-6 h-6" />
              <span className="text-md font-normal">72K Liked</span>
            </button>

            <button
              aria-label="Edit Info"
              className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
            >
              <img src={Dialog} alt="Edit Icon" className="mr-2 w-6 h-6" />
              <span className="text-md font-normal">50K Comments</span>
            </button>

            <button
              aria-label="Edit Info"
              className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
            >
              <img src={bucket} alt="Edit Icon" className="mr-2 w-6 h-6" />
              <span className="text-md font-normal">2.3K Saved</span>
            </button>

            <button
              aria-label="Edit Info"
              className="flex items-center justify-center w-[197px] h-[40px] bg-[#cdd0d499] text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-full "
            >
              <img src={send} alt="Edit Icon" className="mr-2 w-6 h-6" />
              <span className="text-md font-normal">1K Share</span>
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-6">
            <div className="text-[15px] text-[#415365] mb-2 text-left font-semibold">
              Previous comments
            </div>
            <div className="flex items-start space-x-3 rounded-md">
              {/* Profile Image */}
              <img src={Girl} alt="User" className="w-8 h-8 rounded-full" />

              {/* Content Section */}
              <div className="flex flex-col space-y-2">
                {/* Comment Content */}
                <div className="bg-[#EEF0F29C] p-2 rounded-lg w-[120px]">
                  <p className="font-semibold text-[#415365] text-[15px] text-left">
                    Joana Almeida
                  </p>
                  <p className="text-[#415365] text-[14px] text-left">
                    Nice View 🎉
                  </p>
                </div>

                {/* Interaction Section */}
                <div className="flex items-center justify-between text-black text-sm mt-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <img src={ok} alt="Green Icon" className="w-4 h-4" />
                    </div>
                    <div className="">
                      62 <sup>Comments</sup>
                    </div>
                  </div>
                  <div className="">
                    62 <sup>10 h</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-2">
            <div className="flex items-center gap-1">
              {/* Profile Image */}
              <img
                src={Girl}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />

              <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md w-[100%]">
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="What’s on your mind?"
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 ml-3 text-sm"
                />

                {/* Icons */}
                <div className="flex items-center space-x-3 text-gray-400">
                  <button className="hover:text-gray-600">
                    <FontAwesomeIcon icon={faImage} className="w-5 h-5" />
                  </button>
                  <button className="hover:text-gray-600">
                    <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
                  </button>
                  <button className="hover:text-gray-600">
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                  </button>
                  <button className="hover:text-gray-600">
                    <FontAwesomeIcon icon={faPaperclip} className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCard;
