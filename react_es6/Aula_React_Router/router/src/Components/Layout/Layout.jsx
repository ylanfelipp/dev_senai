import React from 'react'
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Menu />
            <main>
                <Outlet />
            </main>
            <footer>
                <span>copyright&copy;SENAI 2025</span>
            </footer>
        </div>
    )
}

export default Layout