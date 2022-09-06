import React from 'react';
import { FloatingLabelAndInput } from './FloatingLabelAndInput';
import { styles } from '../../helpers/styles';

export const LoginForm = ({ handleSubmit, updateInputs }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <FloatingLabelAndInput
                labelName="Username"
                idName="username"
                inputUpdate={updateInputs}
                required
            />
            <FloatingLabelAndInput
                inputType="password"
                idName="password"
                labelName="Password"
                inputUpdate={updateInputs}
                required
            />
            <div className="d-flex justify-content-end mt-3">
                <button className={styles.button}>Login</button>
            </div>
        </form>
    );
};
