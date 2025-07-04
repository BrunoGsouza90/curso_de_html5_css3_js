import React from 'react'

// Esse componente recebe parâmetros.
export default function Props(props) {

    return (

        <>

            <p>Meu nome é {props.nome} {props.sobrenome}.</p>
            <p>{props.mensagem}</p>
        
        </>

    )

}