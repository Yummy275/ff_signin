import { useState } from 'react';
import './App.css';
import { Greeting } from './components/pages/Greeting';
import { NewCustomer } from './components/pages/NewCustomer';
import { Issue } from './components/pages/Issue';
import { Legal } from './components/pages/Legal';

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
                    setCustomerData={setCustomerData}
                    customerData={customerData}
                    setPage={setPage}
                />
            );
        if (page === 'legal') return <Legal customerData={customerData} />;
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
