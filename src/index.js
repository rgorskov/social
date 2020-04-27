import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {
  posts: [
    { id: 1, message: "Hello", likesCount: 10 },
    { id: 2, message: "How are you?", likesCount: 2 },
    { id: 3, message: "Noice", likesCount: 5 },
  ],
  usersDialogs: [
    { id: 1, name: "Yury" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Oleg" },
  ],
  messages: [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you?" },
  ]
};


ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
