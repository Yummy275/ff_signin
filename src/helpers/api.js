const urls = {
    login: `${process.env.REACT_APP_API_URL}/user/login`,
    createNewCustomer: `${process.env.REACT_APP_API_URL}/customer/create`,
};

export const login = async (userInputs) => {
    const loginReq = await fetch(urls.login, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(userInputs),
    });
    const reqJson = await loginReq.json();
    return reqJson;
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
    const reqJson = await createReq.json();
    return reqJson;
};
