import React from 'react'
import "./Dropdown.css"

const Dropdown = ({ selectValue, setSelectValue }) => {
    return (
        <div>
            <label htmlFor="time">Time</label>
            <select required name="time" id="time" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
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