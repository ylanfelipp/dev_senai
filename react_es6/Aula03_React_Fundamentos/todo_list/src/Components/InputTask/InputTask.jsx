import React from 'react'
import "./InputTask.css"

const InputTask = () => {
    return (
        <section className="input-task">
            <div>
                <label htmlFor="task">Adicione uma Tarefa</label>
                <div className="input-button">
                    <input type="text" name="task" id="task" placeholder="Tarefa" />
                    <button type="button">Adicionar</button>
                </div>
            </div>
        </section>
    )
}

export default InputTask