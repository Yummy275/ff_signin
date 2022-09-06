import React, { useEffect, useState } from 'react';
import { createAndPrintIssuePdf } from '../../helpers/createIssuePdf';
import { queryCreateCustomer } from '../../helpers/api';
import { Loading } from '../Loading';
import { styles } from '../../helpers/styles';

export const SendData = ({ customerData, setPage, handleComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const createCustomer = async () => {
            const reqResult = await queryCreateCustomer(customerData);
            if (reqResult.error) {
                return console.log(reqResult.error);
            }
            createAndPrintIssuePdf(customerData);
            setLoading(false);
        };
        createCustomer();
    }, [customerData, setPage]);

    return (
        <>
            <h1>
                {loading ? 'Please Wait' : 'Thank you for choosing FastFix!'}
            </h1>
            {loading ? (
                <Loading />
            ) : (
                <div className="text-center">
                    <button className={styles.button + ' mt-3'}>Done</button>
                </div>
            )}
        </>
    );
};
