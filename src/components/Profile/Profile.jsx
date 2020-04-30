import React from "react";
// import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({data, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      
      <MyPosts posts={data.posts} currentText={data.currentText} dispatch={dispatch} />
      
    </div>
  );
};

export default Profile;
