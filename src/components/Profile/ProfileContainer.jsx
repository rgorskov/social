import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from '../../data/profileThunks';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 1238;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <>
                <Profile userProfile={this.props.userProfile} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

const mapDispatchToProps = {
    getUserProfile,
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
