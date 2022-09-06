import React, { useState } from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Loading } from '../Loading';
import { login } from '../../helpers/api';

export const Login = ({ setGreetPage }) => {
    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loginReq = await login(inputs);
        if (loginReq.error) {
            console.log(loginReq);
            setLoading(false);
        }
        setGreetPage();
    };

    return (
        <>
            <h1 className="text-center mb-5">Login</h1>
            {loading ? (
                <Loading />
            ) : (
                <LoginForm
                    handleSubmit={handleSubmit}
                    updateInputs={handleInputChange}
                />
            )}
        </>
    );
};
