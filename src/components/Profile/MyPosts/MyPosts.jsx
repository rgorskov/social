import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hello' likesCount='10' />
        <Post message='How are you?' likesCount='2' />
        <Post message='Noice' likesCount='' />
      </div>
    </div>
  );
};

export default MyPosts;
