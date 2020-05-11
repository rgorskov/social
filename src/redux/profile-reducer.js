const ADD_POST = 'ADD_POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 10 },
    { id: 2, message: 'How are you?', likesCount: 2 },
    { id: 3, message: 'Noice', likesCount: 5 },
  ],
  currentText: '',
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
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;
