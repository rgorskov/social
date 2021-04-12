import { actionTypes } from './constants';

export const setUserData = (userId, email, login) => ({
    type: actionTypes.AUTH_SET_USER,
    payload: {
        userId,
        email,
        login,
    },
});
