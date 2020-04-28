import rerenderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello", likesCount: 10 },
      { id: 2, message: "How are you?", likesCount: 2 },
      { id: 3, message: "Noice", likesCount: 5 },
    ],
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
  },
};

export const addPost = (text) => {
  let id = state.profilePage.posts.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
  let newPost = {id, message: text, likesCount: 0};
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const sendMessage = (text) => {
  let id = state.dialogsPage.messages.reduce((max, curr) => curr.id > max ? curr.id : max, 0) + 1;
  let newMessage = {id, text};
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export default state;
