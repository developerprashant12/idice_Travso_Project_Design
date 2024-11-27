import React,{useState} from "react";
import BucketImageFirst from "../../assets/bucketimageFirst.png"
import BucketImageSecond from "../../assets/bucketimageSecond.png"
import { useNavigate } from "react-router-dom";

const bucketListData = [
    {
      title: "Generic Bucket List",
      images: [
        BucketImageFirst,
        BucketImageSecond,
        BucketImageSecond,
      ],
    },
    {
      title: "Connection Bucket List",
      images: [
        BucketImageFirst,
        BucketImageSecond,
        BucketImageSecond,
      ],
    },
    {
      title: "Day Travel Buddies",
      images: [
        BucketImageFirst,
        BucketImageSecond,
        BucketImageSecond,
      ],
    },
    {
      title: "Royal Travel Buddies",
      images: [
        BucketImageFirst,
        BucketImageSecond,
        BucketImageSecond,
      ],
    },
  ];

const BucketList = () => {
    const navigate = useNavigate();

  const handleBucketClick = (bucket) => {
    navigate(`/profile/${bucket}`);
  };


  return (
    <div>
      <p className="text-[#364045] font-medium text-[16px] mb-8 text-left">Your Bucket list</p>
      <div className="grid grid-cols-2 gap-8">
      {bucketListData.map((bucket, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 grid grid-cols-2 gap-2 cursor-pointer"
            onClick={() => handleBucketClick(bucket.title)}
          >
            {/* Large Image */}
            <div className="relative">
              <img
                src={bucket.images[0]}
                alt={bucket.title}
                className="w-full h-full object-cover rounded-md"
              />
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold ">
                {bucket.title}
              </p>
            </div>

            {/* Small Images */}
            <div className="grid grid-rows-2 gap-2">
              <img
                src={bucket.images[1]}
                alt={`${bucket.title} - small 1`}
                className="w-full h-[250px] object-cover rounded-md"
              />
              <img
                src={bucket.images[2]}
                alt={`${bucket.title} - small 2`}
                className="w-full h-[250px] object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BucketList;
