import React, { useState, useEffect } from "react";
import Girl from "../../../assets/headerIcon/girl.jpg";
import chevron_down from "../../../assets/chevron-down.png";
import ImageBoxed from "../../../assets/ImageBoxed.png";
import BadgesIconFirst from "../../../assets/BadgesIconFirst.png";
import Select from "react-select";
import "./AllPopupDesign.css"
import PostDetailPopup from "./PostDetailPopup";


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateaPostPopup = ({ isOpen, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("Select View");
  const [isPostDetailPopup, setIsPostDetailPopup] = useState(false)


  const handlePostUpload =()=>{
    setIsPostDetailPopup(true)
    onClose();
  }

  const handlePostDetailPopup = () =>{
    setIsPostDetailPopup(false)
    isOpen();
  }


  const handleChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  

  const handleOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); 
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
      <div className="bg-white rounded-[16px] shadow-lg w-[696px] px-1 py-5 md:w-[696px] h-[672px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-4 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10 md:h-[55px]">
          <h4 className="text-[#303037] font-ubuntu font-bold text-[24px]">
            Create a Post
          </h4>
          <button
            className="text-black hover:text-[#2DC6BE] font-bold text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>

        <div className="px-4 flex flex-col h-full flex-1 overflow-y-auto scrollbar-hidden">
          <div className="py-5 flex items-center justify-between">
            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src={Girl}
                  alt="Girl"
                  className="w-[44px] h-[44px] rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h5 className="font-poppins font-semibold text-[20px] text-[#212626] text-left">
                    Pankaj Reet Tech
                  </h5>
                  <img
                    src={BadgesIconFirst}
                    alt="BadgesIconFirst"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div>
                  <p className="-mt-2 font-inter font-medium text-[16px] text-[#667877] text-left">
                    @Madhu.lika
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              {/* Dropdown Button */}
              <div className="relative">
                <button
                  className="flex items-center justify-center w-[120px] h-[24px] bg-[#FFFFFF] border border-[#D5D5D5] text-[#6D6D6D] font-normal text-[14px] rounded-full focus:outline-none"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  {selectedOption}
                  <img
                    src={chevron_down}
                    alt="Chevron"
                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-md">
                    <button
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={() => handleOption("Public")}
                    >
                      Public View
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={() => handleOption("Private")}
                    >
                      Private View
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <form className="flex flex-col gap-5">
              {/* Input Fields */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                <p className="text-left font-inter font-medium text-[14px] text-[#212626] mb-3">Description</p>
                <p className="text-left font-inter font-medium text-[12px] text-[#869E9D] mb-3">0/300</p>
                </div>
                <textarea
                  placeholder="Your Story in few words..."
                  className="font-inter font-medium text-[16px] text-[#212626] w-full p-3 h-[132px] bg-[#F0F7F7] rounded-[8px] border-1 border-[#F5F5F5] placeholder:text-[#869E9D] focus:outline-none focus:ring-1 focus:ring-[#5E6F78] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
                ></textarea>
              </div>

              <div className="flex flex-col dataSelect">
                <p className="text-left font-inter font-medium text-[14px] text-[#212626] mb-3">Add Location ( Only one )</p>
                 <Select options={options} onChange={handleChange} placeholder="eg: Mysore" className="" />
              </div>

              <div className="flex flex-col">
                <p className="text-left font-inter font-medium text-[14px] text-[#212626] mb-3">Add Buddies</p>
                <input
                  type="text"
                  placeholder="Add Tags"
                  className="font-inter font-medium text-[16px] text-[#212626] w-full p-3 h-[48px] bg-[#F0F7F7] rounded-[8px] border-1 border-[#F5F5F5] placeholder:text-[#869E9D] focus:outline-none focus:ring-1 focus:ring-[#5E6F78] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-left font-inter font-medium text-[14px] text-[#212626] mb-3">Add Tags</p>
                <input
                  type="text"
                  placeholder="eg: John Doe"
                  className="font-inter font-medium text-[16px] text-[#212626] w-full p-3 h-[48px] bg-[#F0F7F7] rounded-[8px] border-1 border-[#F5F5F5] placeholder:text-[#869E9D] focus:outline-none focus:ring-1 focus:ring-[#5E6F78] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]"
                />
              </div>

              <div className="font-inter font-medium text-[16px] text-[#869E9D] w-full p-3 h-[133px] bg-[#F0F7F7] rounded-[8px] border-1 border-[#F5F5F5] placeholder:text-[#869E9D] focus:outline-none focus:ring-1 focus:ring-[#5E6F78] placeholder:font-inter placeholder:font-medium placeholder:text-[16px]">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="cursor-pointer">
                    <img src={ImageBoxed} alt="" className="w-[32px] h-[32px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="font-inter font-medium text-[14px] text-[#212626]">
                    Drag and drop an Image or,
                    </h2>
                    <button className="font-inter font-medium text-[14px] flex items-center justify-center bg-[#2DC6BE] text-white rounded-[7px] w-[82px] h-[36px]">
                    Browse
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end" onClick={handlePostUpload}>
                <button className="font-inter font-medium text-[14px] flex items-center justify-center bg-[#2DC6BE] text-white rounded-[7px] w-[82px] h-[36px]">Next</button>
                <PostDetailPopup
                    isOpen={isPostDetailPopup}
                    onClose={handlePostDetailPopup}
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateaPostPopup;
