
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likesCount: 10 },
        { id: 2, message: "How are you?", likesCount: 2 },
        { id: 3, message: "Noice", likesCount: 5 },
      ],
      currentText: ''
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
      currentText: ''
    },
  },
  getState() { return this._state; },
  _subscriber() {},
  addPost() {
    let id = this._state.profilePage.posts.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
    let newPost = {
      id, 
      message: this._state.profilePage.currentText, 
      likesCount: 0
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.currentText = '';
  
    this._subscriber(this._state);
  },
  sendMessage() {
    let id = this._state.dialogsPage.messages.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
    let newMessage = {
      id, 
      text: this._state.dialogsPage.currentText
    };
    
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.currentText = '';
    
    this._subscriber(this._state);
  },
  updatePostText(text) {
    this._state.profilePage.currentText = text;
    this._subscriber(this._state);
  },
  updateMessageText(text) {
    this._state.dialogsPage.currentText = text;
    this._subscriber(this._state);
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
};

export default store;
