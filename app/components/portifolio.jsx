import React from "react";
import styles from "../page.module.css"

const Portifolio = ()=>{
    return(
        <div className={styles.portifolio} id="portfolio">
            <div className={styles.header_3}>
                <p>Conheca meu trabalho.</p>
                <h2>Portfólio</h2>
            </div>
            <div className={styles.portifolio_item}>
                <img src="../port_1.png" alt="" />
            </div>
            <div className={styles.portifolio_item}>
                <img src="../port_2.png" alt="" />
            </div>
            <div className={styles.portifolio_item}>
                <img src="../port_3.png" alt="" />
            </div> 
        </div>
    )}
export default Portifolio;