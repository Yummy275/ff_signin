import React from 'react';
import { styles } from '../../helpers/styles';

export const Greeting = () => {
    return (
        <>
            <h1 className="mb-3">Welcome To FastFix</h1>
            <div className="d-flex flex-column align-items-center gap-3">
                <button className={styles.button}>New Customer</button>
                <button className={styles.button}>Returning</button>
            </div>
        </>
    );
};
