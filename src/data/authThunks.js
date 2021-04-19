import { stopSubmit } from 'redux-form';
import { getCaptchaUrlSuccess, setUserData } from './authActions';
import { authApi } from '../api/api';

export const getAuthUserData = () => {
    return async (dispatch) => {
        const authUserData = await authApi.checkAuthMe();
        if (authUserData.resultCode === 0) {
            const { id, email, login } = authUserData.data;
            dispatch(setUserData(id, email, login, true));
        }
    };
};

const getCaptchaUrl = () => {
    return async (dispatch) => {
        const captchaUrl = await authApi.getCaptchaUrl();
        dispatch(getCaptchaUrlSuccess(captchaUrl.url));
    };
};

export const login = ({ email, password, rememberMe, captcha }) => {
    return async (dispatch) => {
        const loginResult = await authApi.sendLoginData({
            email,
            password,
            rememberMe,
            captcha,
        });
        switch (loginResult.resultCode) {
            case 0:
                dispatch(getAuthUserData());
                break;
            case 10:
                dispatch(getCaptchaUrl());
            default:
                let action = stopSubmit('login', {
                    _error: loginResult.messages[0] || 'Some error',
                });
                dispatch(action);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        const logoutRes = await authApi.logout();
        if (logoutRes.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    };
};
