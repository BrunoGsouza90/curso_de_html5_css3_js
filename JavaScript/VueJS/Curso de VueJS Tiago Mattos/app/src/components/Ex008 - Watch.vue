<script>

    export default{
        data() {
            return {
                nome: '',
                pagina: '',
            }
        },

        methods: {
            SalvarNome(){
                console.log(this.nome)
            },

            contadorPagina() {
                console.log(this.pagina)
            }
        },

        computed: {

        },

        watch: {
            nome() {
                this.SalvarNome()
            },
        
            pagina() {
                this.contadorPagina()
            }
        }
    }

</script>

<template>

    <h1>Watch</h1>
    
    <input type="text" v-model="nome" placeholder="Digite seu nome">
    {{ nome }}

    <br><br>

    <select v-model="pagina">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select>

    {{ pagina }}

</template>