import React from "react";
import Profile from "../../assets/profilePage.jpg";
import ProfilePhoto from "../../assets/profilePhoto.png";
import travel_badges from "../../assets/travel_badges.png";
import "./Header.css"

const ProfilePageHeaderData = () => {
  return (
    <div className="mt-5 bg-[#F0F7F7] flex justify-center items-center">
      <div className="w-full max-w-[98%] h-[714px] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center">
        {/* Cover Photo Section */}
        <div className="flex flex-col justify-center w-full max-w-98% p-4 px-4">
          <div>
            <img
              src={Profile}
              alt="Cover"
              className="w-full h-[340px] object-cover rounded-[12px]"
            />
            <img
              src={travel_badges}
              className="absolute top-[138px] left-[60px] w-[192px] h-[60px]"
            />
          </div>
          {/* Profile Photo */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative -top-20 border-4 border-white bg-white rounded-full p-[2px]">
              <div className="border-4 border-[#2DC6BE] rounded-full bg-[#F0F7F7] p-[2px]">
                <img
                  src={ProfilePhoto}
                  alt="Profile"
                  className="w-[150px] h-[150px] rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
            <div className="md:w-[720px] -mt-[70px] flex flex-col items-center justify-center">
              <h2 className="font-poppins font-medium text-[32px] text-[#212626] tems-center">
                Pankaj Reet Tech
              </h2>
              <p className="-mt-2 font-inter font-medium text-[20px] items-center text-[#667877]">
                @Pankaj.Reettech
              </p>
              <p className="font-inter font-medium text-[16px] items-center text-[#667877] mt-2">
                Adipiscing sapien felis in semper porttitor massa senectus nunc.
                Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam
                morbi egestas.
              </p>
              <div className="md:w-[470px] md:h-[40px] flex items-center justify-center rounded-full bg-[#E5FFFE] mt-3">
                <p className="font-poppins font-semibold items-center text-center text-[16px] text-[#212626]">
                  Solo Traveler &nbsp;•&nbsp; 252 Trips &nbsp;•&nbsp; 14K
                  followers &nbsp;•&nbsp; 24 Buddies
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <button
                  aria-label="Liked Info"
                  className="flex items-center justify-center w-[131px] h-[40px] bg-[#F0F7F7] text-[#667877]  py-1 px-3 rounded-[4px] hover:bg-[#2DC6BE] hover:text-white colorChange"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 group-hover:stroke-white"
                  >
                    <path
                      d="M7.00008 11.9167H5.75009C4.58711 11.9167 4.00563 11.9167 3.53246 12.0602C2.46713 12.3834 1.63345 13.217 1.31028 14.2824C1.16675 14.7555 1.16675 15.337 1.16675 16.5M11.5834 5.25C11.5834 7.32107 9.90448 9 7.83342 9C5.76235 9 4.08341 7.32107 4.08341 5.25C4.08341 3.17893 5.76235 1.5 7.83342 1.5C9.90448 1.5 11.5834 3.17893 11.5834 5.25ZM8.66675 16.5L11.2512 15.7616C11.375 15.7262 11.4369 15.7085 11.4946 15.682C11.5458 15.6585 11.5945 15.6298 11.64 15.5965C11.6912 15.5589 11.7367 15.5134 11.8277 15.4224L17.2085 10.0417C17.7838 9.46639 17.7838 8.53362 17.2084 7.95831C16.6331 7.38302 15.7004 7.38303 15.1251 7.95833L9.74439 13.339C9.65337 13.43 9.60787 13.4756 9.57028 13.5267C9.53691 13.5722 9.50824 13.6209 9.48471 13.6722C9.45821 13.7299 9.44053 13.7918 9.40516 13.9155L8.66675 16.5Z"
                      stroke="#667877"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-md font-normal">Edit Profile</span>
                </button>
                <button
                  aria-label="Liked Info"
                  className="flex items-center justify-center w-[136px] h-[40px] bg-[#2DC6BE] text-white text-[#434C50] hover:text-gray-800 py-1 px-3 rounded-[4px] hover:bg-[#2DC6BE] hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M10.4998 4.16699V15.8337M4.6665 10.0003H16.3332"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-md font-normal">Add a story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageHeaderData;
