const SEND_MESSAGE = "SEND_MESSAGE",
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let id =
        state.messages.reduce((max, x) => Math.max(x.id, max), 0) + 1;
      let newMessage = {
        id,
        text: state.currentText,
      };

      state.messages.push(newMessage);
      state.currentText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
        state.currentText = action.text;
        return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default dialogsReducer;
