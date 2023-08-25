import React from "react";
import styles from "../page.module.css"

const Portifolio = ()=>{
    return(
        <div className={styles.portifolio} id="portfolio">
            <div className={styles.header_3}>
                <p>Conheca meu trabalho.</p>
                <h1>Portfólio</h1>
            </div>
            <div className={styles.portifolio_item}>
                <div><img src="../port_1.png" alt="" /></div>
            </div>
            <div className={styles.portifolio_item}>
                <div><img src="../port_2.png" alt="" /></div>
            </div>
            <div className={styles.portifolio_item}>
                <div><img src="../port_3.png" alt="" /></div>
            </div> 
            <div className={styles.portifolio_item}>
                <div><img src="../port_1.png" alt="" /></div>
            </div> 
            <div className={styles.portifolio_item}>
                <div><img src="../port_3.png" alt="" /></div>
            </div> 
            <div className={styles.portifolio_item}>
                <div><img src="../port_2.png" alt="" /></div>
            </div> 
        </div>
    )}
export default Portifolio;