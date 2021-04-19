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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: actionTypes.AUTH_GET_CAPTCHA,
    payload: { captchaUrl },
});
