import React from 'react';
import s from './ReduxFormFields.module.css';

const ReduxFormField = ({
    element,
    input,
    meta: { touched, error, invalid },
    type,
}) => {
    const isError = touched && invalid;
    return (
        <div className={isError ? s.error : ''}>
            {React.createElement(element, {
                className: s.field,
                ...input,
                type,
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
