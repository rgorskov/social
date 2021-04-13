import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../data/profileThunks';
import { withRouter } from 'react-router-dom';

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

const WithRoutDataProfileContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

const mapDispatchToProps = {
    getUserProfile,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithRoutDataProfileContainer);
