import './App.css';
import { Greeting } from './components/pages/Greeting';

function App() {
    return (
        <div className="App">
            <div className="vh-100 d-flex justify-content-center align-items-center bg-transparent">
                <div className="p-5 bg-white border rounded">
                    <Greeting />
                </div>
            </div>
        </div>
    );
}

export default App;
