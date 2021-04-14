import { actionTypes } from './constants';

export const sendMessage = (message) => ({
    type: actionTypes.DIALOGS_SEND_MESSAGE,
    message,
});
