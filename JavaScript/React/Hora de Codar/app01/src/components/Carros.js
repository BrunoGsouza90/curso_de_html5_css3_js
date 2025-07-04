import React from 'react'
import PropTypes from 'prop-types'

export function Carros({data}) {

    console.log('Ambiente:', process.env.NODE_ENV)

    return (

        <div>

            <h2>Carro:</h2>

            <p><strong>Nome do Carro:</strong> {data.carros.nome}.</p>
            <p><strong>Modelo do Carro:</strong> {data.carros.modelo}.</p>
            <p><strong>Ano do Carro:</strong> {data.carros.ano}.</p>
            <p><strong>Cor do Carro:</strong> {data.carros.cor}.</p>

        </div>

    )

}

Carros.propTypes = {

    data: PropTypes.string

}