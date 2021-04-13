import React from 'react';
// import style from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ userProfile, updateStatus, status }) => {
    return (
        <div>
            <ProfileInfo
                userProfile={userProfile}
                updateStatus={updateStatus}
                status={status}
            />

            <MyPostsContainer />
        </div>
    );
};

export default Profile;
