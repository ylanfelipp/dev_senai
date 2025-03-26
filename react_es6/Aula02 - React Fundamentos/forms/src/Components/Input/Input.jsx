import React from 'react'
import "./Input.css"

const Input = ({ label, placeholder, inputValue, setInputValue }) => {

    return (
        <>
            <label htmlFor={label}>
                <strong>{label}</strong>
            </label>
            <input
                type="text"
                name={label}
                id={label}
                placeholder={placeholder}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                required
            />
        </>
    )
}

export default Input