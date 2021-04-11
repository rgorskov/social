import { actionTypes } from './constants';

let initialState = {
    usersDialogs: [
        { id: 1, name: 'Yury' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Oleg' },
    ],
    messages: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
    ],
    currentText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DIALOGS_SEND_MESSAGE: {
            let id =
                state.messages.reduce((max, x) => Math.max(x.id, max), 0) + 1;
            let newMessage = {
                id,
                text: state.currentText,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                currentText: '',
            };
        }
        case actionTypes.DIALOGS_UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                currentText: action.text,
            };
        }
        default:
            return state;
    }
};

export const sendMessage = () => ({ type: actionTypes.DIALOGS_SEND_MESSAGE });

export const updateNewMessageText = (text) => ({
    type: actionTypes.DIALOGS_UPDATE_NEW_MESSAGE_TEXT,
    text: text,
});

export default dialogsReducer;
