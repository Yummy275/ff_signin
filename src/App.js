import { useState } from 'react';
import './App.css';
import { Greeting } from './components/pages/Greeting';
import { NewCustomer } from './components/pages/NewCustomer';

function App() {
    const [page, setPage] = useState('greet');

    const mainPages = () => {
        if (page === 'greet') return <Greeting setPage={setPage} />;
        if (page === 'new') return <NewCustomer setPage={setPage} />;
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
