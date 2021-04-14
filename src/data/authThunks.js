import { setUserData } from './authActions';
import { authApi } from '../api/api';

export const getAuthUserData = () => {
    return async (dispatch) => {
        const authUserData = await authApi.checkAuthMe();
        if (authUserData.resultCode === 0) {
            const { id, email, login } = authUserData.data;
            dispatch(setUserData(id, email, login));
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
        }
    };
};
