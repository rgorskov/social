import React from "react";
// import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({data}) => {
  return (
    <div>
      <ProfileInfo />
      
      <MyPosts posts={data.posts} />
      
    </div>
  );
};

export default Profile;
