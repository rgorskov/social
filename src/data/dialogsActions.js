import { actionTypes } from './constants';

export const sendMessage = () => ({ type: actionTypes.DIALOGS_SEND_MESSAGE });

export const updateNewMessageText = (text) => ({
  type: actionTypes.DIALOGS_UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});
