import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./styles.css"

function AdminLayout() {
    return (
        <div className="admin-container">
            <aside className="admin-aside">
                <h2>Painel Admin</h2>
                <nav className="admin-nav">
                    <ul>
                        <li>
                            <Link to="/admin">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout