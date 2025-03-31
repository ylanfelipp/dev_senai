import React from 'react'
import "./TaskCard.css"

const TaskCard = ({ task }) => {
    return (
        <section className="task-card">
            <span>{task}</span>
        </section>
    )
}

export default TaskCard