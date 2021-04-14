import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage } from '../../data/dialogsActions';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        usersDialogs: state.dialogsPage.usersDialogs,
        messages: state.dialogsPage.messages,
    };
};

let mapDispatchToProps = {
    sendMessage,
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
