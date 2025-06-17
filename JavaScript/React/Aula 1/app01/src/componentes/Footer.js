import React from 'react'

export default function Footer() {

    let date_var = new Date()
    let date = `${date_var.getDate()}/${String(date_var.getMonth()).length == 1 ? `0${date_var.getMonth()}` : date_var.getMonth()}/${date_var.getFullYear()}`

    return (

        <>
        
            <footer>

                <p>&copy;HP Softwares {date}</p>

            </footer>

        </>

    )

}