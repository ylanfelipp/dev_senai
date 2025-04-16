import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Menu() {
    return (
        <nav className="menu-nav">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    )
}

export default Menu