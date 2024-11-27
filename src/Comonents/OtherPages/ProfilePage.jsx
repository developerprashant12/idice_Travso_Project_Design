import React,{useState} from "react";
import Profile from "../../assets/profilePage.jpg";
import ProfilePhoto from "../../assets/profilePhoto.png";
import Photo from "../../assets/1.png";
import Group from "../../assets/headerIcon/Group.png";
import Sidebar from "./Sidebar";
import PostCard from "./PostCard";
import { Edit } from "@mui/icons-material";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import BucketList from "./BucketLIst";
import BuddiesSidebar from "./BuddiesSidebar";
import BuddiesPostCard from "./BuddiesPostCard";

const ProfilePage = () => {
  const naviagte = useNavigate();
  const [activeTab, setActiveTab] = useState("Post");

  function handleEditPage() {
    naviagte("/editprofile");
  }

  return (
    <>
      <Header />
      <div className="mt-5 flex justify-center items-center">
        <div className="w-full max-w-[97%] bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Cover Photo Section */}
          <div className="relative">
            <img
              src={Profile} // Replace with your cover photo URL
              alt="Cover"
              className="w-full h-[500px] object-cover"
            />
            <button className="absolute top-4 right-4 bg-white flex items-center px-3 py-1 text-sm font-medium shadow rounded-lg hover:bg-gray-100">
              <span className="material-icons">photo_camera</span>
              <span className="ml-2">Change cover photo</span>
            </button>
          </div>

          {/* Profile and Info Section */}
          <div className="relative bg-white p-4">
            {/* Profile Picture */}
            <div className="absolute -top-14 left-12 rounded-full border-4 border-[#2DC6BE] shadow-lg ">
              <img
                src={ProfilePhoto} // Replace with your profile photo URL
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            {/* User Info */}
            <div className="ml-40 -mt-2 flex-col items-center">
              <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                Pankaj Reet Tech
                <img
                  src={Group}
                  alt="group"
                  className="w-8 h-8 ml-4 rounded-full"
                />
              </h1>
              <p className="text-gray-500 text-left">@Pankaj.ReetTech</p>
            </div>

            {/* Buttons */}
            <div className="absolute top-4 right-8 flex space-x-4">
              <button className="bg-teal-500 text-white px-10 py-2 rounded-lg shadow hover:bg-teal-600 font-bold">
                Add Story
              </button>
              <button
                className="border border-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
                onClick={handleEditPage}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2 text-sm" /> Edit
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-4">
            <nav className="flex gap-[1px] border-t border-[#1DB2AA17] bg-[#1DB2AA17]">
              {["Post", "About", "Buddies", "Gallery", "Bucket List"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? "text-white bg-[#1DB2AAC2]"
                        : "text-[#364045]"
                    } font-medium px-8 hover:px-8 hover:text-white hover:bg-[#1DB2AAC2] hover:p-2 p-2`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto flex gap-6">
          {/*######################### Post Tab #########################*/}
          {/* Sidebar */}
          {activeTab === "Post" && <Sidebar />}
          {/* Main Content */}
          {activeTab === "Post" && (
            <div className="w-3/4">
              <PostCard />
            </div>
          )}
          {/*######################### Post Tab #########################*/}

          {/*######################### Bucket List #########################*/}
          {activeTab === "Bucket List" && <BucketList/> }
          {/*######################### Bucket List #########################*/}


          {/*######################### Buddies Data #########################*/}
          {activeTab === "Buddies" && <BuddiesSidebar /> }

          {activeTab === "Buddies" && (
            <div className="w-3/4">
              <BuddiesPostCard />
            </div>
          )}
          {/*######################### Buddies Data #########################*/}

          
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
