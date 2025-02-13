import { Carousel, Box } from "grommet"
import styles from "./Carrossel.module.css"
import Projetos from "@/data/dataPorfolio"


function Carrossel() {
    return (
        <section className={styles.sec1}>
            <Carousel controls={false} play={3000}>
                {Projetos.map((projeto, index) => (
                    <Box>
                        <div className={styles.cardCarrossel} key={index}>
                            <img src={projeto.image} />
                            <h2>{projeto.title}</h2>
                            <p>{projeto.ano}</p>
                        </div>
                    </Box>
                ))}
            </Carousel>
        </section>
    )
}

export default Carrossel