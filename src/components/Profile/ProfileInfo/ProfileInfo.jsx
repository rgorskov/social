import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import Status from './ProfileStatus';
import defaultUserPhoto from '../../../assets/images/user-photo.png';

const ProfileInfo = ({
    userProfile,
    updateStatus,
    status,
    changeProfilePhoto,
}) => {
    if (!userProfile) {
        return <Preloader />;
    }

    const onCangeProfilePhoto = (e) => {
        changeProfilePhoto(e.target.files[0]);
        e.target.value = '';
    };

    return (
        <div>
            <img
                className={style.profilePhoto}
                src={userProfile.photos.large || defaultUserPhoto}
                alt=""
            />
            <input type="file" onChange={onCangeProfilePhoto} />
            <Status status={status} updateStatus={updateStatus} />
        </div>
    );
};

export default ProfileInfo;
