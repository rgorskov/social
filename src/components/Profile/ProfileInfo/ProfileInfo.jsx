import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';

const ProfileInfo = ({ userProfile }) => {
  if (!userProfile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <div>
        <img src={userProfile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
