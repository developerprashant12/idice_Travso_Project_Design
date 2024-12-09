import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Comonents/MainPages/HomePage";
import LoginPage from "./Comonents/MainPages/LoginPage";
import SignupPage from "./Comonents/MainPages/SignupPage";
import InfluencerPage from "./Comonents/MainPages/SignUpForms/InfluencerPage";
import AlmostPage from "./Comonents/MainPages/SignUpForms/AlmostPage";
import ProfilePage from "./Comonents/OtherPages/ProfilePage";
import EditProfile from "./Comonents/OtherPages/EditProfile";
import BucketDetail from "./Comonents/OtherPages/BucketDetail";
import SuggestionPage from "./Comonents/OtherPages/SuggestionPage";
import CommunityPage from "./Comonents/OtherPages/CommunityPage";
import ChatPage from "./Comonents/OtherPages/NewPages/ChatPage";
import VideoCallPage from "./Comonents/OtherPages/NewPages/VideoCallPage";
import ChatRequestPage from "./Comonents/OtherPages/NewPages/ChatRequestPage";
import BucketList from "./Comonents/OtherPages/BucketLIst";
import BuddiesPage from "./Comonents/OtherPages/BuddiesPage";
import FollowersPage from "./Comonents/OtherPages/FollowersPage";
import FollowingPage from "./Comonents/OtherPages/FollowingPage";
import PostDataDetailPage from "./Comonents/OtherPages/PostDataDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/influencer" element={<InfluencerPage />} />
        <Route path="/almostthere" element={<AlmostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/chatPage" element={<ChatPage />} />
        <Route path="/videoCallPage" element={<VideoCallPage />} />
        <Route path="/chatRequestPage" element={<ChatRequestPage />} />
        <Route path="/bucketList" element={<BucketList />} />
        <Route path="/buddiesPage" element={<BuddiesPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/PostData" element={<PostDataDetailPage />} />
        <Route path="/profile/:bucketTitle" element={<BucketDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
