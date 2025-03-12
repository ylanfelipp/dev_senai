"use client"
import styles from "./modal.module.css"

export default function Modal({ props, onClose}) {
    return (
        <div className={styles.modal} onClick={() => onClose()}>
            <div className={styles.card}>
                <img src={props.image} />
                <strong>{props.title}</strong>
                <p>Ano de Lançamento: <strong>{props.ano}</strong></p>
                <strong>Descrição:</strong>
                <p className={styles.descricao}>{props.descricao}</p>
            </div>
        </div>
    )
}