import React from "react";
import styles from "../page.module.css"

const Header = ()=>{
    return(
        <div className={styles.header}>
            <div className={styles.title}>
                <h2>Portfólio</h2>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#servicos">Meus Servicos</a></li>
                    <li><a href="#fale-comigo">Fale Comigo</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                </ul>
            </div>
        </div>
    )}
export default Header;