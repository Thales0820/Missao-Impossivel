import React from "react";
import {Header} from './components/Header';
import {Card} from './components/Card';

import banner from './imagens/banner.jpg';
import styles from './style.module.css';
import './styles/global.css';
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'
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
          margin: 15
        }}
      >Filmes</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Card imagem={card1} />
          <Card imagem={card2} />
          <Card imagem={card3} />
          <Card imagem={card4} />
      </div>
    </>
  );
}

export default App;
