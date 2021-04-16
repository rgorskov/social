import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Status = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const onInputStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    const enableEditMode = () => {
        setEditMode(true);
    };

    const disableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    return (
        <div>
            {!editMode && (
                <span onClick={enableEditMode}>
                    {props.status || 'No status'}
                </span>
            )}
            {editMode && (
                <input
                    autoFocus
                    onBlur={disableEditMode}
                    value={status}
                    onChange={onInputStatus}
                />
            )}
        </div>
    );
};

export default Status;
