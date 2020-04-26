import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, message: "Hello", likesCount: 10 },
  { id: 2, message: "How are you?", likesCount: 2 },
  { id: 3, message: "Noice", likesCount: 5 },
];

const MyPosts = () => {
  return (
    <div>
      <h1>My posts</h1>
      <div className={style.addPostBlock}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postsData.map((p, i) => (
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
