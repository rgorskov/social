import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likesCount: 10 },
        { id: 2, message: "How are you?", likesCount: 2 },
        { id: 3, message: "Noice", likesCount: 5 },
      ],
      currentText: "",
    },
    dialogsPage: {
      usersDialogs: [
        { id: 1, name: "Yury" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Oleg" },
      ],
      messages: [
        { id: 1, text: "Hello" },
        { id: 2, text: "How are you?" },
      ],
      currentText: "",
    },
  },
  getState() {
    return this._state;
  },
  _subscriber() {},
  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._subscriber();
  },
};



export default store;
