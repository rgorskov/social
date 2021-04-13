import { setUserData } from './authActions';
import { authApi } from '../api/api';

export const getAuthUserData = () => {
    return async (dispatch) => {
        const authUserData = await authApi.checkAuthMe();
        const { id, email, login } = authUserData.data;
        dispatch(setUserData(id, email, login));
    };
};
