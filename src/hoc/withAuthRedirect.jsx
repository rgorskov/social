import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import React from 'react';

const withAuthRedirect = (Component) => {
    const RedirectContainer = ({ isAuth, ...props }) => {
        return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
    };
    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    });

    return connect(mapStateToProps)(RedirectContainer);
};

export default withAuthRedirect;
