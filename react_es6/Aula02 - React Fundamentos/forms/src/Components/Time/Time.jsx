import React from 'react'
import styles from "./styles.module.css"
import TimeCard from '../TimeCard/TimeCard'

const Time = ({ title, colaboradores }) => {
    console.log(colaboradores, title)
    const time = colaboradores.filter(col => col.time === title)
    const timeTamanho = time.length
    return (
        <>
            {timeTamanho === 0 ? <div></div> :
                <div className={styles.timeContainer}>
                    <strong>{title}</strong>
                    {time.map((colaborador, index) => (
                        <TimeCard colaborador={{ ...colaborador }} key={index} />
                    ))}
                </div>}
        </>
    )
}

export default Time