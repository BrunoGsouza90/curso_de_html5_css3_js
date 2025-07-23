<script>

    export default {

        props: {

            nome: {

                type: String,
                required: true

            },
            sobrenome: String,
            idade: {
                
                type: Number,
                validator(value) {
        
                    return value > 0 && value < 120;
                }

            }

        },

        data() {

            return {


            }

        },

        emits: {

            click: ({ nome, sobrenome }) => {

                if(nome == sobrenome) {

                    return "O nome não pode ser igual ao sobrenome!";

                } else {

                    return `${nome} ${sobrenome}.`;

                }

            },
            
            avisarComponentePai(mensagem) {

                return typeof mensagem == 'string'

            }

        },

        methods: {

            verificarNomeCompleto(nome, sobrenome) {

                this.$emit("click", { nome, sobrenome })

                

            }

        }
        
    }

</script>

<template>

    <p class="paragrafo_props"><strong>Info.:</strong> {{ nome }} {{ sobrenome }} tem {{ idade }} de idade.</p class="paragrafo_props">

    <button @click="$emit('avisarComponentePai', 'Essa mensagem veio do Props Filho!')" type="button">Avisar Componente Pai</button>

    <button @click="verificarNomeCompleto(nome, sobrenome)" type="button">Verificar Nome Completo</button>

</template>