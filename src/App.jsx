import React, { useRef, useState } from "react";
//importando os componenets
import {Header} from './components/Header';
import {Card} from './components/Card';
import {Footer} from "./components/Footer";
import Modal, {ModalBody, ModalHeader} from "./components/Modal";

//import styles from './style.module.css';
import './styles/global.css';
//importando as imagens isadas no projeto
import banner from './imagens/banner.jpg';
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'
// npm install
//npm run start

//Esse Array é teoricamente um Banco de Dados
const requisicao = [
   {
		"id": 1,
		"titulo": "Missão Impossível 2",
		"imagem": card1,
		"data": "22 de junho de 2000",
		"direcao": "John Woo",
		"elenco": "Tom Cruise, Dougray Scott, Thandiwe Newton",
		"sinopse": "O agente secreto Ethan Hunt retorna para liderar sua equipe em uma missão que pretende capturar um vírus mortal antes que ele seja liberado por terroristas."
	},
	{
		"id": 2,
		"titulo": "Missão Impossível 3",
		"imagem": card2,
		"data": "5 de maio de 2006",
		"direcao": "J.J. Abrams",
		"elenco": "Tom Cruise, Philip Seymour Hoffman, Ving Rhames",
		"sinopse": "Aposentado do serviço ativo e treinando recrutas para a Força Missão Impossível, o agente Ethan Hunt enfrenta o inimigo mais difícil de sua carreira: Owen Davian."
	},
	{
		"id": 3,
		"titulo": "Missão Impossível 5",
		"imagem": card3,
		"data": "13 de agosto de 2015",
		"direcao": "Christopher McQuarrie",
		"elenco": "Tom Cruise, Jeremy Renner, Simon Pegg",
		"sinopse": "Ethan Hunt luta para expor uma organização secreta chamada Sindicato."
	},
	{
		"id": 4,
		"titulo": "Missão Impossível 7",
		"imagem": card4,
		"data": "13 de julho de 2023",
		"direcao": "Christopher McQuarrie",
		"elenco": "Tom Cruise, Hayley Atwell, Ving Rhames",
		"sinopse": "No novo capítulo da franquia Missão Impossível, o agente Ethan Hunt e sua equipe partem em um novo desafio para rastrear uma arma que, se cair em mãos erradas, pode ameaçar toda a humanidade."
	},
]
function App() {

  const refFilmeModal = useRef({
    titulo: '',
    data: '',
    direcao: '',
    elenco: '',
    sinopse: '',
  })

  const [showModal, setShowModal] = useState(false)

  function onClickCard(filme){
    refFilmeModal.current = filme
    setShowModal(true)
  }

  return (
    //para poder colocar mais de um componente
    <>
      {/* adicionando o componente Header da pasta components */}
      <Header />
      <img width="100%" src={banner} alt="Missão Impossível" />
      {/* <h1 className={styles.title}>Hello World</h1> */}
      <h1
        style={{
          margin: 15,
          textAlign: 'center'
        }}
      >Filmes</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {
            /* usando map para executar os itens do Array requisicao */
          requisicao.map((filme) => {
            return (
              /* adicionando o componente Card da pasta components */
              <Card
                key={filme.id}
                imagem={filme.imagem}
                titulo={filme.titulo} //alterar texto para titulo no Card
                onClick={() => onClickCard(filme)}//Está pegando o ID para colocar as informações corretas no Modal
              />
            )
          })
        }

          {/* <Card imagem={card1} texto={"Missão Impossível 2"} />
          <Card imagem={card2} texto={"Missão Impossível 3"} />
          <Card imagem={card3} texto={"Missão Impossível 5"}/>
          <Card imagem={card4} texto={"Missão Impossível 7"}/> */}
      </div>
      {/* adicionando o componente Modal da pasta components */}
      <Modal
        show={showModal}
        setShow={setShowModal}
      >
        {/* adicionando o componente ModalHeader da pasta components */}
        <ModalHeader>
          <h2>{refFilmeModal.current.titulo}</h2>
        </ModalHeader>
        {/* adicionando o componente ModalBody da pasta components */}
        <ModalBody>
          <p style={{
            fontSize: '0.8rem',
            marginBottom: 10
          }}
          >
            {refFilmeModal.current.data}
          </p>
          <div style={{
              display: 'flex',
              marginBottom: 10
            }}
            >
              <p style={{
              fontSize: '0.8rem',
              color: '#b3b3b3'
            }}
            >
              Direção:
            </p>
            <p style={{
              fontSize: '0.8rem'
            }}
            >
              {refFilmeModal.current.direcao}
            </p>
          </div>
          <div style={{
              display: 'flex',
              marginBottom: 10
            }}
            >
              <p style={{
              fontSize: '0.8rem',
              color: '#b3b3b3'
            }}
            >
              Elenco:
            </p>
            <p style={{
              fontSize: '0.8rem'
            }}
            >
              {refFilmeModal.current.elenco}
            </p>
          </div>
          <p
            style={{
              textAlign: 'justify'
            }}
          >
            {refFilmeModal.current.sinopse}
          </p>
        </ModalBody>
      </Modal>
      {/* adicionando o componente Footer da pasta components */}
      <Footer />
    </>
  );
}

export default App;
