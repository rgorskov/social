import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, currentText, addPost, updateNewPostText }) => {
  let onAddPostHandler = () => {
    addPost();
  };

  let onUpdatePostText = (e) => {
    updateNewPostText(e.target.value);
  };

  return (
    <div>
      <h1>My posts</h1>
      <div className={style.addPostBlock}>
        <div>
          <textarea
            onChange={onUpdatePostText}
            value={currentText}
          />
        </div>
        <div>
          <button onClick={onAddPostHandler}>Add post</button>
        </div>
      </div>
      <div>
        {posts.map((p, i) => (
          <Post
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
