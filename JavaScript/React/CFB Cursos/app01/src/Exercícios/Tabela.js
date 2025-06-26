import React from 'react'
import "./style.css"

class Tabela extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            id: 3,

            dados: [
                
                {

                id: 1,
                nome: "Bruno",
                sobrenome: "Gonçalves",
                idade: "25",
                telefone: "359947523698",
                email: "bruno@gmail.com"

                },

                {

                    id: 2,
                    nome: "Lucas",
                    sobrenome: "Eduardo",
                    idade: "32",
                    telefone: "35987452156",
                    email: "lucas@gmail.com"

                }

            ]

        }

    }

    // Definimos a função para enviar o formulário.
    enviarFormulario = (event) => {

        event.preventDefault()

        this.setState(prevState => {

            let id = prevState.id + 1

            return {

                id: id,
                dados: [...prevState.dados, {

                    id: id,
                    nome: event.target.elements.nome.value,
                    sobrenome: event.target.elements.sobrenome.value,
                    idade: event.target.elements.idade.value,
                    telefone: event.target.elements.telefone.value,
                    email: event.target.elements.email.value

                }]

            }

        })

    }

    // Definimos a função com a estrutura do corpo da tabela.
    tabelaCorpo = () => {

        const dados = this.state.dados

        let dadosEstrutura = []

        for(let dado in dados) {

            dadosEstrutura.push(

                <tr>

                    <td>{dados[dado].id}</td>
                    <td>{dados[dado].nome}</td>
                    <td>{dados[dado].sobrenome}</td>
                    <td>{dados[dado].idade}</td>
                    <td>{dados[dado].telefone}</td>
                    <td>{dados[dado].email}</td>

                </tr> 

            )  

        }

        return (

            dadosEstrutura

        )

    }

    // Definimos a função com a estrutura da tabela.
    tabelaEsqueleto = () => {

        // Retornamos a estrutura da tabela.
        return (

            <table>

                <thead>

                    <tr>

                        <th>#</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                        <th>Email</th>

                    </tr>

                </thead>

                <tbody>

                    {this.tabelaCorpo()}

                </tbody>

            </table>

        )

    }

    render() {

        return (

            <div>

                <h3 id="titulo_tabela">Criar Cliente</h3>

                <form onSubmit={this.enviarFormulario}>

                    <div id="div_form">

                        <div id="div_label">

                            <label for="nome">Nome: </label>
                            <label for="nome">Sobrenome: </label>
                            <label for="nome">Idade: </label>
                            <label for="nome">Telefone: </label>
                            <label for="nome">Email: </label>

                        </div>

                        <div id="div_input">
                            
                            <input type="text" name="nome" id="nome"></input>
                            <input type="text" name="sobrenome" id="sobrenome"></input>
                            <input type="text" name="idade" id="idade"></input>
                            <input type="text" name="telefone" id="telefone"></input>
                            <input type="email" name="email" id="email"></input>

                        </div>

                    </div>

                    <button id="button_form" type="submit">Enviar</button>

                </form>

                {this.tabelaEsqueleto()}

            </div>

        )

    }

}

export default Tabela