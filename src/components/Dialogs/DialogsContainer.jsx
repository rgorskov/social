import { sendMessage, updateNewMessageText } from '../../data/dialogsActions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    usersDialogs: state.dialogsPage.usersDialogs,
    messages: state.dialogsPage.messages,
    currentText: state.dialogsPage.currentText,
  };
};

let actionCreators = {
  sendMessage,
  updateNewMessageText,
};

const DialogsContainer = connect(mapStateToProps, actionCreators)(Dialogs);

export default DialogsContainer;
