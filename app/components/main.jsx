import react from 'react';
import styles from '../page.module.css'
import Clientes from './clientes';
import Header from './header';
import Content from './content';
import Servicos from './servicos';
import Form from './Form';
import Portifolio from './portifolio';
import Footer from './Footer';
const main = () => {
    return(
    <div className={styles.container}>
      <Header />
      <Content />
      <Clientes />
      <Servicos />
      <Form />
      <Portifolio />
      <Footer />
    </div>
    )
}
export default main;
