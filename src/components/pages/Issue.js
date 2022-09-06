import React, { useState } from 'react';
import { IssueForm } from '../forms/IssueForm';
import { styles } from '../../helpers/styles';

export const Issue = ({ customerData, setPage, setCustomerData }) => {
    const [inputs, setInputs] = useState({ accessories: false });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const handleCheck = () => {
        if (inputs.accessories) {
            return setInputs((inputs) => ({
                ...inputs,
                accessories: false,
            }));
        }
        setInputs((inputs) => ({
            ...inputs,
            accessories: true,
        }));
    };

    const cancelHandle = () => {
        setCustomerData({});
        setPage('greet');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomerData((customerData) => ({
            ...customerData,
            ...inputs,
        }));
        setPage('legal');
    };

    const formButtons = (
        <>
            <button type="submit" className={styles.button}>
                Next
            </button>
            <button
                type="button"
                className={styles.button}
                onClick={cancelHandle}
            >
                Cancel
            </button>
        </>
    );

    return (
        <>
            <h1>What brings you in today {customerData.firstName}?</h1>
            <IssueForm
                buttons={formButtons}
                updateTextArea={handleInputChange}
                updateCheckBox={handleCheck}
                handleSubmit={handleSubmit}
            />
        </>
    );
};
