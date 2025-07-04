import React from 'react'
import Logo from './imagens/Logo.png'

export default function Header(){

    return (

        <>
        
            <header>

                <nav>

                    <img width="100px" height="100px" src={Logo} alt="Logo"></img>

                    <ul>

                        <li>Home</li>
                        <li>Contact</li>
                        <li>Talk to us</li>

                    </ul>

                </nav>

            </header>

        </>

    )

}