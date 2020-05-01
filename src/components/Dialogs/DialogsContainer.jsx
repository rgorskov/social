import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  let state = store.getState().dialogsPage;

  let sendMessage = () => {
    store.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (text) => {
    store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      usersDialogs={state.usersDialogs}
      messages={state.messages}
      currentText={state.currentText}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default DialogsContainer;
