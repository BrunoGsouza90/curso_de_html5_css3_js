import React, { useState } from 'react'
import Header from './componentes/Header.js'
import Main from './componentes/Main.js'
import Footer from './componentes/Footer.js'
import Props from './componentes/Props.js'
import { Contador } from './componentes/Contador.js'
import { Comprimento } from './componentes/Comprimento.js'
import { Listas } from './componentes/Listas.js'
import { Formulario } from './componentes/Formulario.js'
import { Relogio } from './componentes/Relogio.js'
import Classes from './componentes/Classes.js'
import CicloDeVida from './componentes/CicloDeVida.js'
import Variaveis from './componentes/Variaveis.js'
import Tabela from './Exercícios/Tabela.js'
import { CalculadoraIMC } from './Exercícios/CalculadoraIMC.js'

export default function App(){

  let nome = "Bruno Gonçalves de Souza"

  let [status, setStatus] = useState(true)

  function LigarDesligar() {

      if(status == true) {

          setStatus(false)

      } else {

          setStatus(true)

      }

  }

  let [num, setNum] = useState(0)

  function Contar() {

      setNum(num + 1)

  }

  let data = {

    "status": status,
    "setStatus": setStatus,
    "LigarDesligar": LigarDesligar,
    "num": num,
    "setNum": setNum,
    "Contar": Contar

  }

  function mensagem() {

    return 'Passagem de função via "Props".'

  }

  let [ocultar_mostrar, setOcultar_mostrar] = useState(true)

  function OcultarMostrar() {

    setOcultar_mostrar(!ocultar_mostrar)

  }

  return (

    <>

      <h1>Relogio</h1>
      <Relogio></Relogio>

      <hr></hr>

      <h1>Header</h1>
      <Header></Header>

      <hr></hr>

      <h1>Main</h1>
      <Main></Main>

      <hr></hr>

      <h1>Props</h1>
      <Props nome="Bruno" sobrenome="Gonçalves" mensagem={mensagem()}></Props>

      <hr></hr>

      <h1>Contador</h1>
      <Contador data={data}></Contador>

      <hr></hr>

      <h1>Comprimento</h1>
      <Comprimento></Comprimento>

      <hr></hr>

      <h1>Listas</h1>
      <Listas></Listas>

      <hr></hr>

      <h1>Formulario</h1>
      <Formulario></Formulario>

      <hr></hr>

      <h1>Classes</h1>
      <Classes nome={nome}></Classes>

      <hr></hr>

      <h1>CicloDeVida</h1>
      <button onClick={OcultarMostrar}>{ocultar_mostrar ? "Ocultar" : "Mostrar"}</button><br></br><br></br>
      {ocultar_mostrar ? <CicloDeVida></CicloDeVida>: "Componente desativado!"}


      <h1>Variáveis Globais</h1>
      <p>Data Atual: {String(Variaveis.dia).length == 1 ? `0${Variaveis.dia}` : Variaveis.dia}/{String(Variaveis.mes).length == 1 ? `0${Variaveis.mes}` : Variaveis.mes}/{Variaveis.ano}. </p>

      <h1>Exercícios</h1>

      <h2>Exercício 1 - Tabela.</h2>

      <Tabela></Tabela>

      <hr></hr>

      <h2>Exercício 2 - CalculadoraIMC.</h2>

      <CalculadoraIMC></CalculadoraIMC>

      <hr></hr>

      <h1>Footer</h1>
      <Footer></Footer>

    </>

  )

}