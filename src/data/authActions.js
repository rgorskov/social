import { actionTypes } from './constants';

export const setUserData = (userId, email, login, isAuth) => ({
    type: actionTypes.AUTH_SET_USER,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
});
