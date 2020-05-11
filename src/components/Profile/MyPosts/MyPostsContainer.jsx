import React from 'react';
import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentText: state.profilePage.currentText,
  };
};

let actionCreators = {
  addPost,
  updateNewPostText,
};

const MyPostsContainer = connect(mapStateToProps, actionCreators)(MyPosts);

export default MyPostsContainer;
