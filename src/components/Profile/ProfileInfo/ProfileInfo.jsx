import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import Status from './ProfileStatus';

const ProfileInfo = ({ userProfile }) => {
    if (!userProfile) {
        return <Preloader />;
    }
    return (
        <div>
            <img src={userProfile.photos.large} alt="" />
            <Status text={'Default text'} />
        </div>
    );
};

export default ProfileInfo;
