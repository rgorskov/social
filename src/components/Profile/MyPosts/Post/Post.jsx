import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.item}>
      <img src="https://www.pngitem.com/pimgs/m/78-785878_batman-icon-batman-avatar-icon-hd-png-download.png" alt=""/>
      <div>
        text texts
      </div>
    </div>
  );
};

export default Post;
