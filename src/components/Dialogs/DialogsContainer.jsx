import { sendMessage, updateNewMessageText } from '../../data/dialogsActions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
