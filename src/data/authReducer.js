import { actionTypes } from './constants';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SET_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        default:
            return state;
    }
};

export default authReducer;
