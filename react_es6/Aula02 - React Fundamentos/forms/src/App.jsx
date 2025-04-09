import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Form from './Components/Form/Form';
import Time from './Components/Time/Time';
import Footer from './Components/Footer/Footer';

function App() {
    const [colaboradores, setColaboradores] = useState([])
    return (
        <div className="App">
            <Banner />
            <Form colaboradores={colaboradores} setColaboradores={setColaboradores} />
            <div className="wrapper">
                <Time title="Aluno" colaboradores={colaboradores} />
                <Time title="Professor" colaboradores={colaboradores} />
                <Time title="Coordenador" colaboradores={colaboradores} />
                <Time title="Administrativo" colaboradores={colaboradores} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
