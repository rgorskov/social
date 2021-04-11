import React from 'react';
import { addPost, updateNewPostText } from '../../../data/profileActions';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentText: state.profilePage.currentText,
  };
};

let mapDispatchToProps = {
  addPost,
  updateNewPostText,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
