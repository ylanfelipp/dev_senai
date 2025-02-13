import { Carousel, Box } from "grommet"
import styles from "./Carrossel.module.css"
import Projetos from "@/data/dataPorfolio"


const Carrossel = () => {
    return (
        <section className={styles.sec1}>
            <Carousel controls={false} play={3000}>
                {Projetos.map(projeto => (
                    <Box>
                        <div className={styles.cardCarrossel}>
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