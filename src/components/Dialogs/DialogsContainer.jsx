import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage, updateNewMessageText } from '../../data/dialogsActions';
import Dialogs from './Dialogs';
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, actionCreators)
)(Dialogs);
