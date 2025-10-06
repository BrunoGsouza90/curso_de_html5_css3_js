import React, { useState, useEffect } from "react"
import axios from "axios"
import "../Exercícios/css/Tabela.css"

export default function ListarClientesApi() {

    const [clientes, setClientes] = useState([])

    useEffect(

        () => {

            axios.get("http://127.0.0.1:3000/clientes")

                .then(res => {

                    const dadosClientes = res.data

                    setClientes(dadosClientes)

                })

                .catch(err => {

                    console.error("Erro ao buscar clientes:", err)

            })

        }

    )

    return (

        <div>

            <table>

                <thead>

                    <tr>

                        <th>_id</th>
                        <th>Nome</th>
                        <th>Idade</th>

                    </tr>

                </thead>

                <tbody>

                    {clientes.map(cliente => (

                        <tr>

                            <td>{cliente._id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.idade}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}