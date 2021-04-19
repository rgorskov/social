import { actionTypes } from './constants';

let initialState = {
    posts: [
        { id: 1, message: 'Hello', likesCount: 10 },
        { id: 2, message: 'How are you?', likesCount: 2 },
        { id: 3, message: 'Noice', likesCount: 5 },
    ],
    userProfile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PROFILE_ADD_POST: {
            let id = Date.now();
            let newPost = {
                id,
                message: action.text,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case actionTypes.PROFILE_SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            };
        case actionTypes.PROFILE_SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case actionTypes.PROFILE_CHANGE_PHOTO:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos },
            };
        default:
            return state;
    }
};

export default profileReducer;
