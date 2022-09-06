import { useState } from 'react';
import './App.css';
import { Greeting } from './components/pages/Greeting';
import { NewCustomer } from './components/pages/NewCustomer';
import { Issue } from './components/pages/Issue';

function App() {
    const [page, setPage] = useState('greet');
    //data about user and the issue that brings them in
    const [customerData, setCustomerData] = useState({});

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
                    customerName={customerData.firstName}
                    setCustomerData={setCustomerData}
                />
            );
    };

    return (
        <div className="App">
            <div className="vh-100 d-flex justify-content-center align-items-center bg-transparent">
                <div className="p-5 bg-white border rounded">{mainPages()}</div>
            </div>
        </div>
    );
}

export default App;
