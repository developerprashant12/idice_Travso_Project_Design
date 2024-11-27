import React, { useState } from "react";
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


const BuddiesSidebar = () => {
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


  // State to toggle visibility of more posts
  const [showAllPost, setShowAllPost] = useState(false);


  // Show only first 9 posts or all posts based on state
  const visiblePosts = showAllPost ? posts : posts.slice(0, 9);


  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default BuddiesSidebar;