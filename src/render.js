import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, sendMessage } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;