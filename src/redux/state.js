let rerenderEntireTree = () => {};

let state = {
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
};
window.state = state;

export const addPost = () => {
  let id = state.profilePage.posts.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
  let newPost = {
    id, 
    message: state.profilePage.currentText, 
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.currentText = '';

  rerenderEntireTree(state);
};

export const sendMessage = () => {
  let id = state.dialogsPage.messages.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
  let newMessage = {
    id, 
    text: state.dialogsPage.currentText
  };
  
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.currentText = '';
  
  rerenderEntireTree(state);
};

export const updatePostText = (text) => {
  state.profilePage.currentText = text;
  rerenderEntireTree(state);
};

export const updateMessageText = (text) => {
  state.dialogsPage.currentText = text;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
