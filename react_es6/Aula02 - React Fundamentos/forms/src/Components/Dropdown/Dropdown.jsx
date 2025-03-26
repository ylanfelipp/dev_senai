import React from 'react'
import "./Dropdown.css"

const Dropdown = () => {
    return (
        <div>
            <label htmlFor="">Time</label>
            <select required name="time">
                <option value=""></option>
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
                <option value="Coordenador">Coordenador</option>
                <option value="Administrativo">Administrativo</option>
            </select>
        </div>
    )
}

export default Dropdown