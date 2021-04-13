import { setStatus, setUserProfile } from './profileActions';
import { profileApi } from '../api/api';

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const profile = await profileApi.getUserProfile(userId);
        dispatch(setUserProfile(profile));
    };
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        const status = await profileApi.getStatus(userId);
        dispatch(setStatus(status));
    };
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileApi.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };
};
