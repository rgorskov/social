import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts, addPost}) => {
  let newPostRef = React.createRef();
  let onAddPostHandler = () => {
    addPost(newPostRef.current.value);
  };

  return (
    <div>
      <h1>My posts</h1>
      <div className={style.addPostBlock}>
        <div>
          <textarea ref={newPostRef}></textarea>
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
