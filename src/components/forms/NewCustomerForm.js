import React from 'react';
import { FloatingLabelAndInput } from './FloatingLabelAndInput';

export const NewCustomerForm = ({ inputUpdate, buttons, handleSubmit }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="d-flex gap-2">
                <FloatingLabelAndInput
                    labelName="First Name"
                    idName="firstName"
                    inputUpdate={inputUpdate}
                    required
                />
                <FloatingLabelAndInput
                    labelName="Last Name"
                    idName="lastName"
                    inputUpdate={inputUpdate}
                    required
                />
            </div>
            <div className="d-flex gap-2">
                <FloatingLabelAndInput
                    labelName="Email"
                    idName="email"
                    inputUpdate={inputUpdate}
                    inputType="email"
                    required
                />
                <FloatingLabelAndInput
                    labelName="Phone (xxx-xxx-xxxx)"
                    idName="phone"
                    inputUpdate={inputUpdate}
                    inputType="phone"
                    inputPattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                    required
                />
            </div>
            <div className="d-flex gap-2">
                <FloatingLabelAndInput
                    labelName="Street"
                    idName="street"
                    inputUpdate={inputUpdate}
                    required
                />
                <FloatingLabelAndInput
                    labelName="City"
                    idName="city"
                    inputUpdate={inputUpdate}
                    required
                />
            </div>
            <div className="d-flex gap-2">
                <FloatingLabelAndInput
                    labelName="State"
                    idName="state"
                    inputUpdate={inputUpdate}
                    required
                />
                <FloatingLabelAndInput
                    labelName="Postal Code"
                    idName="zip"
                    inputUpdate={inputUpdate}
                    required
                />
            </div>
            <div className="d-flex gap-5 mt-3 justify-content-center">
                {buttons}
            </div>
        </form>
    );
};
