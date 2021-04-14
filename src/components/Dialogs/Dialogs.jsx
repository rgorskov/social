import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';

let NewMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="message" component="textarea" />
            <button>Send message</button>
        </form>
    );
};

NewMessageForm = reduxForm({ form: 'newMessageForm' })(NewMessageForm);

const Dialogs = ({ usersDialogs, messages, sendMessage }) => {
    let onSendMessageHandler = ({ message }) => {
        sendMessage(message);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.usersList}>
                {usersDialogs.map((d, i) => (
                    <UserDialog id={d.id} name={d.name} key={i} />
                ))}
            </div>
            <div className={style.messages}>
                {messages.map((m, i) => (
                    <Message id={m.id} text={m.text} key={i} />
                ))}
                <NewMessageForm onSubmit={onSendMessageHandler} />
            </div>
        </div>
    );
};

export default Dialogs;
