import Image from "next/image"
import iconSVG from "../../../public/icon.svg"
import style from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <section>
                <Image 
                    src={iconSVG}
                />
            </section>
            <section>
                <ul className={style.listaDeLinks}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Projeto</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </section>
        </nav>
    )
}