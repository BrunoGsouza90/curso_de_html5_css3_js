import React from 'react'

// Componentes Principais.
import Header from './componentes/Header.js'
import Main from './componentes/Main.js'
import Footer from './componentes/Footer.js'

// Componentes Extras.
import Props from './componentes/Props.js'

export default function App(){

  function mensagem() {

    return 'Passagem de função via "Props".'

  }

  return (

    <>

      <Header></Header>

      <Main></Main>

      {/* Passando parâmetros por meio do "Props". */}
      <Props nome="Bruno" sobrenome="Gonçalves" mensagem={mensagem()}></Props>

      <Footer></Footer>

    </>

  )

}