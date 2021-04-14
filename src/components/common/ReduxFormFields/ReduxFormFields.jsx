import React from 'react';
import s from './ReduxFormFields.module.css';

const ReduxFormField = ({ element, input, meta }) => {
    const { touched, error, invalid } = meta;
    const isError = touched && invalid;
    return (
        <div className={isError && s.error}>
            {React.cloneElement(React.createElement(element), {
                className: s.field,
                ...input,
            })}
            {isError && <span className={s.errorMessage}>{error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    return <ReduxFormField element="textarea" {...props} />;
};

export const Input = (props) => {
    return <ReduxFormField element="input" {...props} />;
};
