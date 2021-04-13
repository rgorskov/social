import { setUserProfile } from './profileActions';
import { profileApi } from '../api/api';

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const profile = await profileApi.getUserProfile(userId);
        dispatch(setUserProfile(profile));
    };
};
