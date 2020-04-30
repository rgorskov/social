const ADD_POST = 'ADD_POST',
SEND_MESSAGE = 'SEND_MESSAGE',
UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
  _addPost() {
    let id =
      this._state.profilePage.posts.reduce(
        (max, curr) => (curr.id > max ? curr.id : max),
        0
      ) + 1;
    let newPost = {
      id,
      message: this._state.profilePage.currentText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.currentText = "";

    this._subscriber(this._state);
  },
  _sendMessage() {
    let id =
      this._state.dialogsPage.messages.reduce(
        (max, curr) => (curr.id > max ? curr.id : max),
        0
      ) + 1;
    let newMessage = {
      id,
      text: this._state.dialogsPage.currentText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.currentText = "";

    this._subscriber(this._state);
  },
  _updateNewPostText(text) {
    this._state.profilePage.currentText = text;
    this._subscriber(this._state);
  },
  _updateNewMessageText(text) {
    this._state.dialogsPage.currentText = text;
    this._subscriber(this._state);
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case SEND_MESSAGE:
        this._sendMessage();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.text);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._updateNewMessageText(action.text);
        break;
      default:
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default store;
