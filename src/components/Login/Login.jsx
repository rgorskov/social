import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../data/authThunks';
import { required } from '../../utils.js/validators';
import { Input } from '../common/ReduxFormFields/ReduxFormFields';

let LoginForm = ({ captchaUrl, handleSubmit, error, ...p }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type="text"
                    name="email"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type="password"
                    name="password"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input" />
            </div>
            {captchaUrl && (
                <>
                    <div>
                        <img src={captchaUrl} />
                    </div>
                    <div>
                        <Field
                            type="text"
                            name="captcha"
                            component={Input}
                            validate={[required]}
                        />
                    </div>
                </>
            )}
            {error && <span>{error}</span>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ isAuth, captchaUrl, login }) => {
    const onSubmit = ({ email, password, rememberMe, captcha }) => {
        login({ email, password, rememberMe, captcha });
    };

    if (isAuth) {
        return <Redirect to="/profile" />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
