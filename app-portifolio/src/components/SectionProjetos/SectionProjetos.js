"use client"
import { useState } from "react"
import Projetos from "@/data/dataPorfolio"
import styles from "./SectionProjetos.module.css"
import Modal from "../Modal/Modal"

function SectionProjetos() {
    const [state, setState] = useState(false)
    const [project, setProject] = useState(null)
    const handleClick = (proj) => {
        setState(state => !state)
        setProject(proj)
        console.log("Funcionou!!!")
    }

    const handleClose = () => {
        setState(false)
    }
    return (
        <section id="projetos" className={styles.sec1}>
            <h2 className={styles.title}>
                Projetos
            </h2>
            <div className={styles.projetos}>
                {Projetos.map((projeto) => (
                    <div key={projeto.title}>
                        <div className={styles.card} onClick={() => handleClick(projeto)}>
                            <img src={projeto.image} alt={projeto.title} />
                            <h2>{projeto.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {state && <Modal props={project} onClose={handleClose} />}
        </section>
    )
}

export default SectionProjetos