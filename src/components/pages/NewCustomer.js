import React, { useState } from 'react';
import { NewCustomerForm } from '../forms/NewCustomerForm';
import { styles } from '../../helpers/styles';

export const NewCustomer = ({ setPage }) => {
    const [inputs, setInputs] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const formButtons = (
        <>
            <button type="submit" className={styles.button}>
                Next
            </button>
            <button
                type="button"
                className={styles.button}
                onClick={() => setPage('greet')}
            >
                Cancel
            </button>
        </>
    );

    return (
        <>
            <h1 className="text-center mb-5">Please fill out form</h1>
            <NewCustomerForm
                inputUpdate={handleInputChange}
                buttons={formButtons}
                handleSubmit={formSubmit}
            />
        </>
    );
};
