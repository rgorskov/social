import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = ({}) => {
  let consumerRender = (store) => {
    let state = store.getState().profilePage;

    let addPost = () => store.dispatch(addPostActionCreator());

    let updateNewPostText = (text) =>
      store.dispatch(updateNewPostActionCreator(text));

    return (
      <MyPosts
        posts={state.posts}
        currentText={state.currentText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    );
  };

  return <StoreContext.Consumer>{consumerRender}</StoreContext.Consumer>;
};

export default MyPostsContainer;
