import { sendMessage, updateNewMessageText } from '../../data/dialogsActions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

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

const WithAuthRedirect = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
    mapStateToProps,
    actionCreators
)(WithAuthRedirect);

export default DialogsContainer;
