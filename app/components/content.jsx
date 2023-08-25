import React from "react";
import styles from "../page.module.css"

const Content = ()=>{
    return(
        <div className={styles.content}>
            <div className={styles.content1}>
                <h1>
                    Olá, meu nome é Maria
                </h1>
                <p>
                Sou programadora e gostaria de apresentar meu
        trabalho para você através deste portfólio.
                </p>
                <div className={styles.contentbutton}>
                    <a href="#servicos">
                        Meus Serviços
                    </a>
                </div>
            </div>
            <div className={styles.content2}>
                <img src="../mulher.png" width="700"/>
            </div>
      </div>
    )}
export default Content;