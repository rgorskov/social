import { actionTypes } from './constants';

let initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 10 },
    { id: 2, message: 'How are you?', likesCount: 2 },
    { id: 3, message: 'Noice', likesCount: 5 },
  ],
  currentText: '',
  user: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_ADD_POST: {
      let id = state.posts.reduce((max, x) => Math.max(x.id, max), 0) + 1;
      let newPost = {
        id,
        message: state.currentText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        currentText: '',
      };
    }
    case actionTypes.PROFILE_UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        currentText: action.text,
      };
    }
    case actionTypes.PROFILE_SET_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default profileReducer;
