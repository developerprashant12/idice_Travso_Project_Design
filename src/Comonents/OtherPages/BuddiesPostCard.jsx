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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

const BuddiesPostCard = () => {
  return (
    <>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <button className="bg-[#EEF0F2] text-[#415365] px-32 py-2 rounded-full hover:text-white hover:bg-[#2DC6BE]">
            Following
          </button>
          <button className="bg-[#EEF0F2] text-[#415365] px-32 py-2 rounded-full hover:text-white hover:bg-[#2DC6BE]">
            Followers
          </button>
          <button className="bg-[#EEF0F2] text-[#415365] px-32 py-2 rounded-full hover:text-white hover:bg-[#2DC6BE]">
            Buddies
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-between bg-[#EEF0F2] text-[#415365] px-4 py-2 w-full rounded-lg hover:text-white hover:bg-[#2DC6BE]">
          Following (57) <KeyboardArrowDownIcon/> 
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-between bg-[#EEF0F2] text-[#415365] px-4 py-2 w-full rounded-lg hover:text-white hover:bg-[#2DC6BE]">
          Followers (63)  <KeyboardArrowUpIcon/>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4">
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-between bg-[#EEF0F2] text-[#415365] px-4 py-2 w-full rounded-lg hover:text-white hover:bg-[#2DC6BE]">
          Buddies (32) <KeyboardArrowUpIcon/>
          </button>
        </div>
      </div>
      
        <div
          className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 mb-4"
        >
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
                  <h3 className="font-semibold text-left">Madhulika Sharma</h3>
                </div>

                {/* Time */}
                <p className="flex items-center gap-3 text-sm text-gray-500 text-left">
                <span>@Madhu.lika</span>   
                <span>12kFollowers</span>
                <span>252 Trips</span>
                </p>
              </div>
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-gray-500 cursor-pointer"
              />
            </div>
          </div>
          <p className="mb-4 text-left">Adipiscing sapien felis in semper porttitor massa senectus nunc. Non ac cursus nisl luctus diam dignissim. Cras tincidunt etiam morbi egestas. Adipiscing sapien felis in semper porttitor massa senectus nunc.  Adipiscing sapien felis in semper porttitor massa senectus nunc.</p>
        </div>
    </>
  );
};

export default BuddiesPostCard;
