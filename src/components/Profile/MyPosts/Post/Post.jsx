import React from "react";
import style from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img src="https://www.pngitem.com/pimgs/m/78-785878_batman-icon-batman-avatar-icon-hd-png-download.png" alt=""/>
      <div>
        { message }
      </div>
      <div className={style.likeBlock}>
        <span> {likesCount} </span>
        <button>like</button>
      </div>
    </div>
  );
};

export default Post;
