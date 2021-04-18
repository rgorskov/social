import { getAuthUserData } from './authThunks';
import { actionTypes } from './constants';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_SET_INITIALIZED:
            return {
                initialized: true,
            };
        default:
            return state;
    }
};

export default appReducer;

const setInitiaized = () => {
    return { type: actionTypes.APP_SET_INITIALIZED };
};

export const initialize = () => {
    return (dispatch) => {
        dispatch(getAuthUserData()).then(() => {
            dispatch(setInitiaized());
        });
    };
};
