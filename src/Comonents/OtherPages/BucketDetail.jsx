import React from "react";
import { useParams } from "react-router-dom";
import Travel from "../../assets/travel.png";
import Like from "../../assets/like.png";
import Message from "../../assets/messages.png";
import Header from "./Header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BucketDetail = () => {
  const { bucketTitle } = useParams();

  const decodedTitle = decodeURIComponent(bucketTitle);

  const mediaItems = [
    {
      type: "image",
      src: Travel,
      likes: "72k",
      comments: "50k",
    },
    {
      type: "video",
      src: Travel,
      likes: "65k",
      comments: "40k",
    },
    {
      type: "image",
      src: Travel,
      likes: "87k",
      comments: "80k",
    },
    {
      type: "video",
      src: Travel,
      likes: "46k",
      comments: "30k",
    },
    {
      type: "image",
      src: Travel,
      likes: "52k",
      comments: "40k",
    },
    {
      type: "video",
      src: Travel,
      likes: "76k",
      comments: "60k",
    },
    {
      type: "image",
      src: Travel,
      likes: "93k",
      comments: "77k",
    },
    {
      type: "image",
      src: Travel,
      likes: "34k",
      comments: "25k",
    },
    {
      type: "video",
      src: Travel,
      likes: "67k",
      comments: "49k",
    },
    {
      type: "image",
      src: Travel,
      likes: "72k",
      comments: "50k",
    },
    {
      type: "image",
      src: Travel,
      likes: "87k",
      comments: "80k",
    },
    {
      type: "video",
      src: Travel,
      likes: "55k",
      comments: "39k",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto flex-col gap-6">
          <p className="text-[#364045] flex items-center font-medium text-[16px] mb-8 text-left">
            <KeyboardBackspaceIcon className="mr-2" />
            {decodedTitle}
          </p>

          <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg mx-auto bg-gray-200"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Media ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Media ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#d7dbde99] rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Like and Comment Section */}
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm px-2 py-1 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <img src={Like} alt="Likes" className="h-5 w-5" />
                      <span>{item.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <img src={Message} alt="Likes" className="h-5 w-5" />
                      <span>{item.comments.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BucketDetail;
