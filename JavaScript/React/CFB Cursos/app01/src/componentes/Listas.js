import React from 'react'

export function Listas() {

    let carros = ["HRV", "Golf", "Focus", "Cruze", "Argo", "Civic"]

    return (

        <>

            {carros.map((carro, index) => (

                <p key={index}>{carro}</p>

            ))}

        </>

    )

}