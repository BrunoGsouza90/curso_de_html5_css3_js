import React, { useEffect, useState } from 'react'

export function Relogio() {

    let date = new Date()

    let [horas, setHoras] = useState(date.getHours())
    let [minutos, setMinutos] = useState(date.getMinutes())
    let [segundos, setSegundos] = useState(date.getSeconds())

    let horario = `${horas}:${String(minutos).length == 1 ? `0${minutos}` : minutos}:${String(segundos).length == 1 ? `0${segundos}` : segundos}`

    function atualizarHora() {

        date = new Date()

        setHoras(date.getHours())
        setMinutos(date.getMinutes())
        setSegundos(date.getSeconds())

    }
 
    setInterval(atualizarHora, 1000)

    return (

        <>
        
            <p>Agora são exatamente: {horario}</p>

        </>

    )

}