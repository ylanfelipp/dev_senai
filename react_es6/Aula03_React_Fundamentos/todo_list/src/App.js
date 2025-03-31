import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import InputTask from './Components/InputTask/InputTask';
import TaskList from './Components/TaskList/TaskList';

function App() {
    const [list, setList] = useState([
        {
            name: "Limpar a Casa"
        }
    ])
    return (
        <div className="App">
            <Header />
            <main className="lista-tarefas">
                <InputTask  setInputValue={setList} />
                <TaskList list={list} />
            </main>
        </div>
    );
}

export default App;
