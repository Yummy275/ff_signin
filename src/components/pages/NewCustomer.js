import React, { useState } from 'react';
import { NewCustomerForm } from '../forms/NewCustomerForm';
import { styles } from '../../helpers/styles';

const InputCheckModal = ({ inputs, hideModal, onAccept }) => {
    return (
        <div
            className="100vh position-absolute bg-white"
            style={{ zIndex: '10', width: '800px' }}
        >
            <h2 className="text-center">Is this correct?</h2>
            <div className="mb-3">
                <h4>Full Name</h4>
                <h3 className="fst-italic text-danger">
                    {inputs.firstName + ' ' + inputs.lastName}
                </h3>
            </div>
            <div className="mb-3">
                <h4>Phone</h4>
                <h3 className="fst-italic text-danger">{inputs.phone}</h3>
            </div>
            <div className="mb-3">
                <h4>Email</h4>
                <h3 className="fst-italic text-danger">inputs.email</h3>
            </div>
            <div className="mb-3">
                <h4>Address</h4>
                <h3 className="fst-italic text-danger">{`${inputs.street} ${inputs.city} ${inputs.state}, ${inputs.zip}`}</h3>
            </div>
            <div>
                <button className={styles.button} onClick={onAccept}>
                    Accept
                </button>
                <button className={styles.button} onClick={() => hideModal}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export const NewCustomer = ({ setPage, setCustomerData }) => {
    const [inputs, setInputs] = useState({});
    const [showInputsCheck, setShowInputsCheck] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setShowInputsCheck(true);
    };

    const acceptCheck = () => {
        setPage('issue');
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
            {showInputsCheck && (
                <InputCheckModal
                    inputs={inputs}
                    hideModal={() => setShowInputsCheck(false)}
                    onAccept={acceptCheck}
                />
            )}
            <h1 className="text-center mb-5">Please fill out form</h1>
            <NewCustomerForm
                inputUpdate={handleInputChange}
                buttons={formButtons}
                handleSubmit={formSubmit}
            />
        </>
    );
};
