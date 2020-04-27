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

export default state;
