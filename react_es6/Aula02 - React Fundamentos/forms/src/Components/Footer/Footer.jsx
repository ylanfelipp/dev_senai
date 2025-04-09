import React from 'react'
import styles from "./styles.module.css"

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialMedia}>
                <img src="/img/Facebook-256.png" alt="Facebook-256.png" />
                <img src="/img/Twitter-Bird-256.png" alt="Twitter-Bird-256.png" />
                <img src="/img/Instagram-256.png" alt="Instagram-256.png" />
            </div>
            <div className={styles.senaiLogo}>
                <img src="/img/senai-logo-3.png" alt="senai-logo-3.png" />
            </div>
            <div className={styles.autor}>
                Desenvolvido por Ylan Felipp
            </div>
        </footer>
    )
}

export default Footer