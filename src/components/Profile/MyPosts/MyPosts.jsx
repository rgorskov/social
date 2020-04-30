import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "./../../../redux/state";

const MyPosts = ({ posts, currentText, dispatch }) => {
  let newPostRef = React.createRef();

  let onAddPostHandler = () => {
    dispatch(addPostActionCreator());
  };

  let onupdatePostText = () => {
    dispatch(updateNewPostActionCreator(newPostRef.current.value));
  };

  return (
    <div>
      <h1>My posts</h1>
      <div className={style.addPostBlock}>
        <div>
          <textarea
            ref={newPostRef}
            onChange={onupdatePostText}
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
