import Projetos from "@/data/dataPorfolio"
import styles from "./SectionProjetos.module.css"

function SectionProjetos() {
    return (
        <section className={styles.sec1}>
            <h2 className={styles.title}>
                Projetos
            </h2>
            <div className={styles.projetos}>
                {Projetos.map((projeto) => (
                    <div key={projeto.title} className={styles.card}>
                        <img src={projeto.image} alt={projeto.title} />
                        <h2>{projeto.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SectionProjetos