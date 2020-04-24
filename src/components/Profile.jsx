import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <main className="main">
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>new post</div>
        <div>
          posts
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
