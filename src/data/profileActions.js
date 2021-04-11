import { actionTypes } from './constants';

export const addPost = () => ({ type: actionTypes.PROFILE_ADD_POST });

export const updateNewPostText = (text) => ({
  type: actionTypes.PROFILE_UPDATE_NEW_POST_TEXT,
  text: text,
});

export const setUserProfile = (userProfile) => {
  return {
    type: actionTypes.PROFILE_SET_USER_PROFILE,
    userProfile,
  };
};
