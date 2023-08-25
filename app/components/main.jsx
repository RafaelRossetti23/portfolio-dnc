import react from 'react';
import styles from '../page.module.css'
import Clientes from './clientes';
import Header from './header';
import Content from './content';
import Servicos from './servicos';
import Form from './Form';
import Portifolio from './portifolio';
const main = () => {
    return(
    <div className={styles.container}>
      <Header />
      <Content />
      <Clientes />
      <Servicos />
      <Form />
      <Portifolio />
    </div>
    )
}
export default main;
