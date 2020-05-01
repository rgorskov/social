const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 10 },
    { id: 2, message: "How are you?", likesCount: 2 },
    { id: 3, message: "Noice", likesCount: 5 },
  ],
  currentText: "",
};

const profileReducer = (state = initialState, action) => {
  state = {...state};
  switch (action.type) {
    case ADD_POST:
      let id = state.posts.reduce((max, x) => Math.max(x.id, max), 0) + 1;
      let newPost = {
        id,
        message: state.currentText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.currentText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.currentText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;
