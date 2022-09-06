const urls = {
    createNewCustomer: `${process.env.REACT_APP_API_URL}/customer/create`,
};

export const queryCreateCustomer = async (customerData) => {
    const createReq = await fetch(urls.createNewCustomer, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(customerData),
    });
    if (createReq.error) {
        return null;
    }
    return;
};
