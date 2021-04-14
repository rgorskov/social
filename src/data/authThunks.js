import { stopSubmit } from 'redux-form';
import { setUserData } from './authActions';
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

export const login = ({ email, password, rememberMe }) => {
    return async (dispatch) => {
        const loginResult = await authApi.sendLoginData({
            email,
            password,
            rememberMe,
        });
        if (loginResult.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
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
