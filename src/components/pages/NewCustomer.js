import React, { useState } from 'react';
import { NewCustomerForm } from '../forms/NewCustomerForm';
import { styles } from '../../helpers/styles';
import { phoneFormatter } from '../../helpers/phoneFormatter';
import { capitalizeFirstLetter } from '../../helpers/capitlizeFirstLetter';

const InputCheckModal = ({ inputs, hideModal, onAccept }) => {
    return (
        <div
            className="position-absolute bg-white border p-5 rounded text-center"
            style={{
                zIndex: '10',
                width: '800px',
                margin: '0 auto 0 auto',
                left: '0',
                right: '0',
            }}
        >
            <h2 className="text-center mb-5">Is this correct?</h2>
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
            <div className="d-flex justify-content-center gap-5 mt-3">
                <button className={styles.button} onClick={onAccept}>
                    Accept
                </button>
                <button className={styles.button} onClick={hideModal}>
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
        const inputsCopy = { ...inputs };
        const formattedPhone = phoneFormatter(inputs.phone);
        const formattedFirstName = capitalizeFirstLetter(inputsCopy.firstName);
        const formattedLastName = capitalizeFirstLetter(inputsCopy.lastName);
        inputsCopy.phone = formattedPhone;
        inputsCopy.firstName = formattedFirstName;
        inputsCopy.lastName = formattedLastName;
        setInputs({ ...inputsCopy });
        setShowInputsCheck(true);
    };

    const acceptCheck = () => {
        setCustomerData(inputs);
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
