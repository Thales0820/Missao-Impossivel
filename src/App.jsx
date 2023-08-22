import React from "react";
import {Header} from './components/Header';

import banner from './imagens/banner.jpg';
import styles from './style.module.css';
import './styles/global.css';
// npm install
//npm run start

function App() {
  return (
    <>
      <Header />
      <img width="100%" src={banner} alt="Missão Impossivél" />
      <h1 className={styles.title}>Hello World</h1>
      <h1
        style={{
          color: 'blue',
          backgroundColor: 'red'
        }}
      >5 minutos para o intervalo</h1>
      <p>Primeira aula de React</p>
    </>
  );
}

export default App;
