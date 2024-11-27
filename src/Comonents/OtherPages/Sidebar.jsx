import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Objects from "../../assets/Objects.png";
import First from "../../assets/PostImage/first.png";
import Second from "../../assets/PostImage/second.png";
import Third from "../../assets/PostImage/third.png";
import Fourth from "../../assets/PostImage/fourth.png";
import Fifth from "../../assets/PostImage/fifth.png";
import Sixth from "../../assets/PostImage/sixth.png";
import Seventh from "../../assets/PostImage/seventh.png";
import Eighth from "../../assets/PostImage/eigth.png";
import Ninth from "../../assets/PostImage/ninth.png";
import Tenth from "../../assets/PostImage/first.png";
import Girl from "../../assets/headerIcon/girl.jpg";
import Boy1 from "../../assets/headerIcon/boy1.png";
import Boy2 from "../../assets/headerIcon/boy2.jpg";

import {
  faCalendarAlt,
  faMapMarkerAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      imageUrl: First,
      title: "Post 1",
    },
    {
      id: 2,
      imageUrl: Second,
      title: "Post 2",
    },
    {
      id: 3,
      imageUrl: Third,
      title: "Post 3",
    },
    {
      id: 4,
      imageUrl: Fourth,
      title: "Post 4",
    },
    {
      id: 5,
      imageUrl: Fifth,
      title: "Post 5",
    },
    {
      id: 6,
      imageUrl: Sixth,
      title: "Post 6",
    },
    {
      id: 7,
      imageUrl: Seventh,
      title: "Post 7",
    },
    {
      id: 8,
      imageUrl: Eighth,
      title: "Post 8",
    },
    {
      id: 9,
      imageUrl: Ninth,
      title: "Post 9",
    },
    {
      id: 10,
      imageUrl: Tenth,
      title: "Post 10",
    },
    {
      id: 11,
      imageUrl: Sixth,
      title: "Post 11",
    },
    {
      id: 12,
      imageUrl: Seventh,
      title: "Post 12",
    },
  ]);

  const [buddies, setbuddies] = useState([
    {
      id: 1,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Girl,
      follow: "Followed",
    },
    {
      id: 2,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Boy1,
      follow: "Followed",
    },
    {
      id: 3,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Followed",
    },
    {
      id: 4,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Boy1,
      follow: "Followed",
    },
    {
      id: 5,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Girl,
      follow: "Followed",
    },
    {
      id: 6,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Followed",
    },
  ]);

  const [followers, setfollowers] = useState([
    {
      id: 1,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Girl,
      follow: "Follow",
    },
    {
      id: 2,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Boy1,
      follow: "Following",
    },
    {
      id: 3,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Follow",
    },
    {
      id: 4,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Boy1,
      follow: "Following",
    },
    {
      id: 5,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Girl,
      follow: "Following",
    },
    {
      id: 6,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Following",
    },
  ]);

  const [following, setfollowing] = useState([
    {
      id: 1,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Girl,
      follow: "Follow",
    },
    {
      id: 2,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Boy1,
      follow: "Following",
    },
    {
      id: 3,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Follow",
    },
    {
      id: 4,
      name: "Madhulika",
      handle: "@Madhu.lika",
      image: Boy1,
      follow: "Following",
    },
    {
      id: 5,
      name: "Pankaj",
      handle: "@Reet.Pankaj",
      image: Girl,
      follow: "Following",
    },
    {
      id: 6,
      name: "Rishab",
      handle: "@frontend",
      image: Boy2,
      follow: "Following",
    },
  ]);

  // State to toggle visibility of more posts
  const [showAllPost, setShowAllPost] = useState(false);
  const [showAllbuddies, setShowAllbuddies] = useState(false);
  const [showAllfollowers, setShowAllfollowers] = useState(false);
  const [showAllfollowing, setShowAllfollowing] = useState(false);


  // Show only first 9 posts or all posts based on state
  const visiblePosts = showAllPost ? posts : posts.slice(0, 9);

  // Show only first 9 posts or all posts based on state
  const visiblePostsbuddies = showAllbuddies ? buddies : buddies.slice(0, 3);

  const visiblePostsfollowes = showAllfollowers
    ? followers
    : followers.slice(0, 3);

    const visiblePostsfollowing = showAllfollowing
    ? following
    : following.slice(0, 3);

  return (
    <div className="flex flex-col">
      <div className="w-[405px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 px-6 mb-4">
        {/* Header Section */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-lg font-semibold text-gray-800">Info</h2>
          <button
            aria-label="Edit Info"
            className="flex items-center text-gray-500 hover:text-gray-800 border border-gray-400 py-1 px-3 rounded-full"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2 text-sm" />
            <span className="text-sm">Edit</span>
          </button>
        </div>
        {/* Description */}
        <div className="text-left mt-4">
          <p className="text-sm text-gray-600">
            Adipiscing sapien felis in semper porttitor massa senectus nunc. Non
            ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi
            egestas.
          </p>
          <div className="mt-6">
            <img src={Objects} alt="Traveler Badge" className="" />
          </div>
        </div>
        {/* Info List */}
        <div className="mt-6">
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="mr-2 text-gray-400"
              />
              <span>DOB: 25 Aug 2002</span>
            </li>
            <li className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-400" />
              <span>Male</span>
            </li>
            <li className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-gray-400"
              />
              <span>From: Nagpur, Maharashtra</span>
            </li>
            <li className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400" />
              <span>Joined: September 2022</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[405px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">All Posts ({posts.length})</h2>
          <p
            onClick={() => setShowAllPost(!showAllPost)}
            className="text-teal-800 cursor-pointer hover:underline text-sm"
          >
            {showAllPost ? "See Less" : "See All"}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {/* Dynamically render images and titles */}
          {visiblePosts.map((post) => (
            <div key={post.id}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[130px] rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[405px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">
            Buddies ({followers.length})
          </h2>
          <p
            onClick={() => setShowAllbuddies(!showAllbuddies)}
            className="text-teal-800 cursor-pointer hover:underline text-sm"
          >
            {showAllbuddies ? "See Less" : "See All"}
          </p>
        </div>
        {/* User List */}
        <div className="mt-4 space-y-4">
          {visiblePostsbuddies.map((buddy) => (
            <div key={buddy.id} className="flex items-center justify-between">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={buddy.image}
                  alt={buddy.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 text-left">
                    {buddy.name}
                  </p>
                  <p className="text-sm text-gray-500 text-left">
                    {buddy.handle}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-[#2DC6BE] border-2 border-[#2DC6BE] rounded-lg font-semibold">
                  {buddy.follow}
                </button>
                <button className="px-3 py-2 text-xs text-[#2DC6BE] border-2 border-[#2DC6BE] rounded-lg font-semibold">
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[405px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">
            Followers ({followers.length})
          </h2>
          <p
            onClick={() => setShowAllfollowers(!showAllfollowers)}
            className="text-teal-800 cursor-pointer hover:underline text-sm"
          >
            {showAllfollowers ? "See Less" : "See All"}
          </p>
        </div>
        {/* User List */}
        <div className="mt-4 space-y-4">
          {visiblePostsfollowes.map((buddy) => (
            <div key={buddy.id} className="flex items-center justify-between">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={buddy.image}
                  alt={buddy.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 text-left">
                    {buddy.name}
                  </p>
                  <p className="text-sm text-gray-500 text-left">
                    {buddy.handle}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  className={`w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold ${
                    buddy.follow === "Follow"
                      ? "bg-[#2DC6BE] text-white border-[#2DC6BE]"
                      : "text-[#2DC6BE] border-[#2DC6BE]"
                  }`}
                >
                  {buddy.follow}
                </button>
                <button
                  className={`px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold ${
                    buddy.follow === "Follow"
                      ? "bg-[#2DC6BE] text-white border-[#2DC6BE]"
                      : "text-[#2DC6BE] border-[#2DC6BE]"
                  }`}
                >
                  {buddy.follow === "Follow" ? "+" : "X"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[405px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">
            Following ({following.length})
          </h2>
          <p
            onClick={() => setShowAllfollowing(!showAllfollowing)}
            className="text-teal-800 cursor-pointer hover:underline text-sm"
          >
            {showAllfollowing ? "See Less" : "See All"}
          </p>
        </div>
        {/* User List */}
        <div className="mt-4 space-y-4">
          {visiblePostsfollowing.map((buddy) => (
            <div key={buddy.id} className="flex items-center justify-between">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={buddy.image}
                  alt={buddy.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 text-left">
                    {buddy.name}
                  </p>
                  <p className="text-sm text-gray-500 text-left">
                    {buddy.handle}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  className={`w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold ${
                    buddy.follow === "Follow"
                      ? "bg-[#2DC6BE] text-white border-[#2DC6BE]"
                      : "text-[#2DC6BE] border-[#2DC6BE]"
                  }`}
                >
                  {buddy.follow}
                </button>
                <button
                  className={`px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold ${
                    buddy.follow === "Follow"
                      ? "bg-[#2DC6BE] text-white border-[#2DC6BE]"
                      : "text-[#2DC6BE] border-[#2DC6BE]"
                  }`}
                >
                  {buddy.follow === "Follow" ? "+" : "X"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
