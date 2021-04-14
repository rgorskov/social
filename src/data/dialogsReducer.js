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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DIALOGS_SEND_MESSAGE: {
            let id = Date.now();
            let newMessage = {
                id,
                text: action.message,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
};

export default dialogsReducer;
