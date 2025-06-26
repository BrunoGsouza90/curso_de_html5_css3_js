import React from 'react'

export function Comprimento() {

    let date = new Date()

    let hora = date.getHours()

    let comprimento = ""

    if(hora >= 0 && hora < 6) {

        comprimento = `Boa madrugada ${String.fromCodePoint(0x1F31A)}`

    } else if(hora >= 6 && hora < 12) {

        comprimento = `Bom dia ${String.fromCodePoint(0x26C5)}`

    } else if(hora >= 12 && hora < 18) {

        comprimento = `Boa tarde ${String.fromCodePoint(0x1F31E)}`

    } else if(hora >= 18 && hora < 24) {

        comprimento = `Boa noite ${String.fromCodePoint(127771)}`

    }

    return (

        <>
        
            <main>

                <p>{comprimento}</p>

            </main>
        
        </>

    )

}