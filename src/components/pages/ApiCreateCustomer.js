import React, { useEffect, useState } from 'react';
import { queryCreateCustomer } from '../../helpers/api';
import { Loading } from '../Loading';

const ApiCreateCustomer = ({ customerData, setPage, handleComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const createCustomer = async () => {
            const reqResult = await queryCreateCustomer(customerData);
            if (reqResult.error) {
                return console.log(reqResult.error);
            }
            setLoading(false);
            setTimeout(() => {
                setPage('greet');
            }, 5000);
        };
        createCustomer();
    }, [customerData, setPage]);

    return (
        <>
            <h1>
                {loading ? 'Please Wait' : 'Thank you for choosing FastFix'}
            </h1>
            {loading ? <Loading /> : <div></div>}
        </>
    );
};

export default ApiCreateCustomer;
