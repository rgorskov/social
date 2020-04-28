import React from "react";
// import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({data, addPost, updatePostText}) => {
  return (
    <div>
      <ProfileInfo />
      
      <MyPosts posts={data.posts} currentText={data.currentText} addPost={addPost} updatePostText={updatePostText} />
      
    </div>
  );
};

export default Profile;
