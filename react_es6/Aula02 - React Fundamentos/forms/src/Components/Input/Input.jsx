import React from 'react'
import "./Input.css"

const Input = ({ label, placeholder }) => {
  return (
    <label>
        <strong>{label}</strong>
        <input type="text" name={label} id={label} placeholder={placeholder} />
    </label>
  )
}

export default Input