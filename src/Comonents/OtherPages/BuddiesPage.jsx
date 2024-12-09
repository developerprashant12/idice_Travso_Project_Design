import React from "react";
import Header from "./Header";
import ProfilePageHeaderData from "./ProfilePageHeaderData";
import BuddiesSidebar from "./BuddiesSidebar";
import BuddiesPostCard from "./BuddiesPostCard";

const BuddiesPage = () => {
  return (
    <>
      <Header />
      <ProfilePageHeaderData />
      <div className="min-h-screen bg-gray-50 p-4">
        <p className="font-poppins text-[#212626] font-semibold text-[28px] mb-5 text-left flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 27L13.5 18L22.5 9"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Buddies (32)
        </p>
        <div className="container mx-auto flex gap-5">
          {/* Main Content */}
          <div className="w-full">
            <BuddiesPostCard />
          </div>
          <div className="flex flex-col">
            {/* Sidebar */}
            <BuddiesSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuddiesPage;
