import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Form from './Components/Form/Form';

function App() {
    const [colaboradores, setColaboradores] = useState([])
    console.log(colaboradores)
    return (
        <div className="App">
            <Banner />
            <Form colaboradores={colaboradores} setColaboradores={setColaboradores} />
        </div>
    );
}

export default App;
