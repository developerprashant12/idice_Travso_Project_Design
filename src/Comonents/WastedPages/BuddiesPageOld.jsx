import React, { useState } from "react";
import Girl from "../../assets/headerIcon/girl.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BuddiesPostCard = () => {
  const [activeButton, setActiveButton] = useState("buddies");

  const toggleSection = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  const isSectionVisible = (buttonName) => activeButton === buttonName;

  return (
    <>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center justify-between">
          <button
            className={`px-32 py-2 rounded-full ${
              activeButton === "following"
                ? "bg-[#2DC6BE] text-white"
                : "bg-[#EEF0F2] text-[#415365] hover:bg-[#2DC6BE] hover:text-white"
            }`}
            onClick={() => toggleSection("following")}
          >
            Following
          </button>
          <button
            className={`px-32 py-2 rounded-full ${
              activeButton === "followers"
                ? "bg-[#2DC6BE] text-white"
                : "bg-[#EEF0F2] text-[#415365] hover:bg-[#2DC6BE] hover:text-white"
            }`}
            onClick={() => toggleSection("followers")}
          >
            Followers
          </button>
          <button
            className={`px-32 py-2 rounded-full ${
              activeButton === "buddies"
                ? "bg-[#2DC6BE] text-white"
                : "bg-[#EEF0F2] text-[#415365] hover:bg-[#2DC6BE] hover:text-white"
            }`}
            onClick={() => toggleSection("buddies")}
          >
            Buddies
          </button>
        </div>
      </div>

      {/*------------------------ Full Button Section -----------------------*/}
      {["following", "followers", "buddies"].map((section) => (
        <>
          <div
            key={section}
            className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4"
          >
            <button
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-[#415365] bg-[#EEF0F2] hover:bg-[#2DC6BE] hover:text-white"
              onClick={() => toggleSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} (57)
              {isSectionVisible(section) ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </div>
          {isSectionVisible(section) && (
            <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4 mt-4">
              <div className="flex-col mb-5 border-b border-b-gray-400">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Girl}
                    alt={Girl}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-left">
                          Madhulika Sharma
                        </h3>
                      </div>

                      {/* Time */}
                      <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                        <span>@Madhu.lika</span>
                        <span>12kFollowers</span>
                        <span>252 Trips</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        Follow
                      </button>
                      <button className="px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-left">
                    Adipiscing sapien felis in semper porttitor massa senectus
                    nunc. Non ac cursus nisl luctus diam dignissim. Cras
                    tincidunt etiam morbi egestas. Adipiscing sapien felis in
                    semper porttitor massa senectus nunc. Adipiscing sapien
                    felis in semper porttitor massa senectus nunc.
                  </p>
                </div>
              </div>
              <div className="flex-col mb-8 border-b border-b-gray-400">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Girl}
                    alt={Girl}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-left">
                          Madhulika Sharma
                        </h3>
                      </div>

                      {/* Time */}
                      <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                        <span>@Madhu.lika</span>
                        <span>12kFollowers</span>
                        <span>252 Trips</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        Following
                      </button>
                      <button className="px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-left">
                    Adipiscing sapien felis in semper porttitor massa senectus
                    nunc. Non ac cursus nisl luctus diam dignissim. Cras
                    tincidunt etiam morbi egestas. Adipiscing sapien felis in
                    semper porttitor massa senectus nunc. Adipiscing sapien
                    felis in semper porttitor massa senectus nunc.
                  </p>
                </div>
              </div>
              <div className="flex-col mb-8 border-b border-b-gray-400">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Girl}
                    alt={Girl}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-left">
                          Madhulika Sharma
                        </h3>
                      </div>

                      {/* Time */}
                      <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                        <span>@Madhu.lika</span>
                        <span>12kFollowers</span>
                        <span>252 Trips</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        Following
                      </button>
                      <button className="px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-left">
                    Adipiscing sapien felis in semper porttitor massa senectus
                    nunc. Non ac cursus nisl luctus diam dignissim. Cras
                    tincidunt etiam morbi egestas. Adipiscing sapien felis in
                    semper porttitor massa senectus nunc. Adipiscing sapien
                    felis in semper porttitor massa senectus nunc.
                  </p>
                </div>
              </div>
              <div className="flex-col mb-5 border-b border-b-gray-400">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Girl}
                    alt={Girl}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-left">
                          Madhulika Sharma
                        </h3>
                      </div>

                      {/* Time */}
                      <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                        <span>@Madhu.lika</span>
                        <span>12kFollowers</span>
                        <span>252 Trips</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        Follow
                      </button>
                      <button className="px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-left">
                    Adipiscing sapien felis in semper porttitor massa senectus
                    nunc. Non ac cursus nisl luctus diam dignissim. Cras
                    tincidunt etiam morbi egestas. Adipiscing sapien felis in
                    semper porttitor massa senectus nunc. Adipiscing sapien
                    felis in semper porttitor massa senectus nunc.
                  </p>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Girl}
                    alt={Girl}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-left">
                          Madhulika Sharma
                        </h3>
                      </div>

                      {/* Time */}
                      <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                        <span>@Madhu.lika</span>
                        <span>12kFollowers</span>
                        <span>252 Trips</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[90px] px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        Follow
                      </button>
                      <button className="px-3 py-2 text-sm font-semibold border-2 rounded-lg font-semibold bg-[#2DC6BE] text-white border-[#2DC6BE] text-[#2DC6BE] border-[#2DC6BE]">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-left">
                    Adipiscing sapien felis in semper porttitor massa senectus
                    nunc. Non ac cursus nisl luctus diam dignissim. Cras
                    tincidunt etiam morbi egestas. Adipiscing sapien felis in
                    semper porttitor massa senectus nunc. Adipiscing sapien
                    felis in semper porttitor massa senectus nunc.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default BuddiesPostCard;
