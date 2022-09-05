import React from 'react';
import { styles } from '../../helpers/styles';

export const Greeting = ({ setPage }) => {
    return (
        <>
            <h1 className="mb-3">Welcome To FastFix</h1>
            <div className="d-flex flex-column align-items-center gap-3">
                <button
                    className={styles.button}
                    onClick={() => setPage('new')}
                >
                    New Customer
                </button>
                <button
                    className={styles.button}
                    onClick={() => setPage('return')}
                >
                    Returning
                </button>
            </div>
        </>
    );
};
