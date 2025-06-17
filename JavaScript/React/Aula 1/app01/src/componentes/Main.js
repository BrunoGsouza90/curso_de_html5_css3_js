import React from 'react'
import Hacker1 from './imagens/Imagem1.jpg'

// Importando o arquivo CSS.
import '../App.css'

export default function Main() {

    const canal = 'CFB Cursos'
    const curso = 'Curso de React'

    return (

        <>
        
            <div className="container_custom">

                <h1 style={{ fontStyle: 'italic' }}>Bem-Vindo ao {curso} do {canal}!</h1>
                <img width="300px" src={Hacker1} alt="Hacker1"></img>

            </div>

        </>

    )

}