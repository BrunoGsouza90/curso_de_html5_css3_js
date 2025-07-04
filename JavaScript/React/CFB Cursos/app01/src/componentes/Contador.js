import React from 'react'

import '../App.css'

export function Contador(props) {

    return (

        <>
        
            <main>

                <div>

                    <button onClick={props.data.LigarDesligar}>Ligar/Desligar</button>
                    <p>Status: <span className={props.data.status ? "status_verde" : "status_vermelho"}>{!props.data.status ? "Desligado" : "Ligado"}</span></p>

                    <button onClick={props.data.Contar}>Contar </button>
                    
                    <p>Contador: {props.data.num}</p>

                </div>

            </main>
        
        </>

    )

}