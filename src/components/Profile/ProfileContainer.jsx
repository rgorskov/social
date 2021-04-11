import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../data/profileActions';
import { withRouter } from 'react-router-dom';
// import style from "./Profile.module.css";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <>
        <Profile userProfile={this.props.userProfile} />
      </>
    );
  }
}

const withRoutDataProfileContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.user,
  };
};

const mapDispatchToProps = {
  setUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoutDataProfileContainer);
