<script>

    export default {

        data() {

            return {

                nota_1: 0,
                nota_2: 0,
                resultado: "",

                mostrar_esconder: "Mostrar",
                texto_show: false

            }

        },

        computed: {

            somarNotas() {

                return (this.nota_1 + this.nota_2) / 2;

            }

        },

        methods: {

            MostrarEsconder() {

                this.texto_show = !this.texto_show;

            }
            
        }

    }

</script>

<template>

    <div>

        <div class="div_nota">

            <div class="div_opcao_nota">

                <div class="div_item">

                    <label for="nota_1"><strong>Nota 1</strong></label>
                    <input class="input_nota" type="number" name="nota_1" id="nota_1" min="0" max="10" v-model="nota_1">

                </div>

                <div class="div_item">

                    <label for="nota_2"><strong>Nota 2</strong></label>
                    <input class="input_nota" type="number" name="nota_2" id="nota_2" min="0" max="10" v-model="nota_2">

                </div>

            </div>

            <div>

                <p v-if="this.somarNotas > 7" class="resposta_nota" style="color: green;">Aprovado</p>

                <p v-else-if="this.somarNotas == 7" class="resposta_nota" style="color: orange;">Em recuperação</p>

                <p v-else class="resposta_nota" style="color: red;">Reprovado</p>

            </div>

        </div>

        <div class="div_show">

            <button v-on:click="MostrarEsconder()" type="button">{{ texto_show ? "Esconder" : "Mostrar" }}</button>

            <p id="paragrafo_show" v-show="texto_show">Salve galera do perigo!</p>

        </div>
            
    </div>

</template>