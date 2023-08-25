import React from "react";
import styles from "../page.module.css"

const Form = ()=>{
    return(
        <div className={styles.form} id="fale-comigo"> 
            <div className={styles.form_img}>
                <img src="../mulher_e_filha.png"/>
            </div>
            <div className={styles.form_content}>
                <p>Economize seu tempo</p>
                <h1>Ganhe mais dinheiro</h1>
                <p>Digite aqui seu endereço de e-mail. Eu entrarei em contato para fornecer um diagnóstico gratuito.</p>
                <form action="https://formspree.io/f/xvojavdz" method="post">
                    <input type="email" name="email" placeholder="E-mail" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )}
export default Form;