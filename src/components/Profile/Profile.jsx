import React from 'react';
// import style from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ userProfile }) => {
  return (
    <div>
      <ProfileInfo userProfile={userProfile} />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
