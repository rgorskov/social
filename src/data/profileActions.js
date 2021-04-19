import { actionTypes } from './constants';

export const addPost = (text) => ({ type: actionTypes.PROFILE_ADD_POST, text });

export const setUserProfile = (userProfile) => {
    return {
        type: actionTypes.PROFILE_SET_USER_PROFILE,
        userProfile,
    };
};

export const setStatus = (status) => {
    return {
        type: actionTypes.PROFILE_SET_STATUS,
        status,
    };
};

export const changeProfilePhotoSuccess = (photos) => {
    return {
        type: actionTypes.PROFILE_CHANGE_PHOTO,
        photos,
    };
};
