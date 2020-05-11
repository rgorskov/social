const ADD_POST = 'ADD_POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
  SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    case ADD_POST: {
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
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        currentText: action.text,
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export const setUserProfile = (user) => {
  return {
    type: SET_USER_PROFILE,
    user,
  };
};

export default profileReducer;
