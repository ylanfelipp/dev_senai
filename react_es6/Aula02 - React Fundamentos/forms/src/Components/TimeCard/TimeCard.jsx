import React from 'react'
import styles from "./styles.module.css"


const TimeCard = ({ colaborador }) => {
    return (
        <div className={styles.timeCard}>
            <div className={styles.avatar}>
            </div>
            <img src={colaborador.imagem} alt="user.png" />
            <div className={styles.nomeCargo}>
            <p>{colaborador.nome}</p>
            <p>{colaborador.cargo}</p>
            </div>
        </div>
    )
}

export default TimeCard