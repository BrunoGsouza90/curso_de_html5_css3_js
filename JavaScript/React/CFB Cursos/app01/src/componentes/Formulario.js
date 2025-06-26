import React, { useState } from 'react'

export function Formulario() {

    let [nome, setNome] = useState("Fulano")

    let mudarNome = (event) => {

        setNome(event.target.value)

    }

    return (

        <>

            <div>

                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" onChange={mudarNome} value={nome}></input>

            </div>

            <p>Nome digitado: {nome}</p>

        </>

    )

}