<script>

    export default {

        data() {

            const Atributos = {

                id: "atributo",
                class: "atributo",
                style: "color: blue;"
                
            };

            return {

                Atributos,

                id: "atributo",
                class: "atributo",
                style: "color: blue;",

                textoBotao: "Ativar",
                AtivarDesativar: true,

                nome: "",
                idade: ""

            }

        },

        methods: {

            botaoAtivarDesativar() {

                if(this.textoBotao == "Ativar") {

                    this.textoBotao = "Desativar";

                } else {

                    this.textoBotao = "Ativar";

                }

                this.AtivarDesativar = !this.AtivarDesativar;

            },

            enviarFormulario(event) {

                this.nome = event.target.nome.value
                this.idade = `${event.target.idade.value} anos`

            }

        }

    }

</script>

<template>

    <div>

        <div>

            <p v-bind="Atributos">Estamos inserindo atributos aqui dentro por meio do "Bind".</p>

            <p :class :id :style>Estamos inserindo atributos aqui dentro por meio do "Bind" indiretamente.</p>

        </div>

        <div>
            
            <button type="button" @click="botaoAtivarDesativar">{{ textoBotao }}</button>

            <input class="input" v-bind:disabled="AtivarDesativar" type="text">
        
        </div>

        <div class="div_form">

            <form v-on:submit.prevent="enviarFormulario">

                <div>

                    <label for="nome">Nome: </label>
                    <input class="input_form" type="text" id="nome" name="nome" placeholder="Digite seu nome...">

                </div>

                <div>

                    <label for="idade">Idade: </label>
                    <input class="input_form" type="text" id="idade" name="idade" placeholder="Digite seu idade...">
                    
                </div>

                <div>

                    <button type="submit">Enviar</button>

                </div>

            </form>

            <div class="div_resultado">

                <p>Seu nome é: <strong>{{ nome }}</strong>.</p>
                <p>Sua idade é: <strong>{{ idade }}</strong>.</p>

            </div>

        </div>

    </div>


</template>