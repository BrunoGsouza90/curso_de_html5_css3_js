<script>

    export default{
        name: 'App',
        data(){
            return{
                texto: ''
            }
        },
        
        methods: {
            Clicar(){
                window.alert('Clicou!')
            },
            
            Clicar2(){
                window.alert('Clicou!')
            },

            Clicar3(){
                window.alert('Aqui o evento é disparado apenas uma vez!')
            },

            google(){
                window.alert('Indo pro site Google!')
            },

            casaBonita(){
                this.texto = 'A casa é bonita demais!'
            }
        }
    }

</script>

<template>

    <h1>Eventos</h1>

    <button v-on:click="Clicar()">Botão com v-on</button>
    
    <br><br>
    
    <button @click="Clicar2()">Botão sem v-on</button>
    
    <br><br>
    
    <button v-on:click.once="Clicar3()">Evento disparado apenas uma vez</button>

    <form action="https://www.google.com.br/" target="_blank" v-on:submit="google()">
        <p>Clique no botão para ir para o site do Google:</p>
        <button type="submit">Clique aqui para ir para Google</button>
    </form>

    <form v-on:submit.prevent="casaBonita()">
        <p>Está casa é linda?</p>
        <button type="submit">Se você a casa bonita clique aqui</button>
        <p>{{ texto }}</p>

        <p>Obs.: Sem o prevent no Evento o contéudo texto não permanece ao clicar no botão!</p>
    </form>

</template>