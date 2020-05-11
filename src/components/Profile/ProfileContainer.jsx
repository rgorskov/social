import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
// import style from "./Profile.module.css";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.user,
  };
};

const actionResults = {
  setUserProfile,
};

export default connect(mapStateToProps, actionResults)(ProfileContainer);
