import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../data/authThunks';
import Header from './Header';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
