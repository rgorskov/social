import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
    getUserProfile,
    getStatus,
    updateStatus,
} from '../../data/profileThunks';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 1238;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <>
                <Profile
                    userProfile={this.props.userProfile}
                    updateStatus={this.props.updateStatus}
                    status={this.props.status}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
    };
};

const mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus,
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
