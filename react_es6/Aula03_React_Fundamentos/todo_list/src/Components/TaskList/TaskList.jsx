import React from 'react'
import "./TaskList.css"
import TaskCard from '../TaskCard/TaskCard'

const TaskList = ({ list }) => {
    return (
        <section className="task-list">
            {list.map(task => (
                <TaskCard  task={task.name} />
            ))}
        </section>
    )
}

export default TaskList