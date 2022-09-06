import React from 'react';

export const FloatingLabelAndInput = ({
    inputType,
    labelName,
    idName,
    inputUpdate,
    inputPattern,
    required,
}) => {
    return (
        <div className="form-floating mb-3">
            <input
                type={inputType ? inputType : 'text'}
                className="form-control"
                id={idName}
                placeholder="float-input"
                onChange={(e) => inputUpdate(e)}
                pattern={inputPattern}
                required={required}
            />
            <label htmlFor={idName}>{labelName}</label>
        </div>
    );
};
