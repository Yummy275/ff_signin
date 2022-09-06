import { useState } from 'react';
import './App.css';
import { Greeting } from './components/pages/Greeting';
import { NewCustomer } from './components/pages/NewCustomer';
import { Issue } from './components/pages/Issue';
import { Legal } from './components/pages/Legal';
import { Login } from './components/pages/Login';
import ApiCreateCustomer from './components/pages/ApiCreateCustomer';

function App() {
    const [page, setPage] = useState('');
    //data about user and the issue that brings them in
    const [customerData, setCustomerData] = useState({});

    const addSignatureToData = (sigData) => {
        setCustomerData((customerData) => ({
            ...customerData,
            signature: sigData,
        }));
    };

    const mainPages = () => {
        if (page === 'greet') return <Greeting setPage={setPage} />;
        if (page === 'new')
            return (
                <NewCustomer
                    setPage={setPage}
                    setCustomerData={setCustomerData}
                />
            );
        if (page === 'issue')
            return (
                <Issue
                    setCustomerData={setCustomerData}
                    customerData={customerData}
                    setPage={setPage}
                />
            );
        if (page === 'legal')
            return (
                <Legal
                    addSignatureToData={addSignatureToData}
                    setPage={setPage}
                />
            );
        if (page === 'create')
            return (
                <ApiCreateCustomer
                    customerData={customerData}
                    setPage={setPage}
                />
            );
        return <Login setGreetPage={() => setPage('greet')} />;
    };

    return (
        <div className="App">
            <div
                className="d-flex justify-content-center align-items-center bg-transparent"
                style={{ minHeight: '100vh' }}
            >
                <div
                    className="p-5 bg-white border rounded"
                    style={{ maxWidth: '1000px' }}
                >
                    {mainPages()}
                </div>
            </div>
        </div>
    );
}

export default App;
