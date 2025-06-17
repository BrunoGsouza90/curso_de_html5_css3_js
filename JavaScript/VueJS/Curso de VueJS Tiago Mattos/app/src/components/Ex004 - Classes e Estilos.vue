<script>

    export default{
        name: 'App',
        data(){
            return{
                mudarFonte: true
            }
        }
    }

</script>

<template>
    
    <main :class="{ 'mudarCor' : false, 'Verde' : false, 'Azul': true }">
        <h1>Classes e Estilos</h1>
        <p :style="{ 'font-size': '32px' }">Aumentando a letra</p>
        <p :style="mudarFonte ? { 'font-family': 'cursive', 'font-size': '32px' } : {}">Mudando a fonte</p>
    </main>

</template>

<style>

    * {
        margin: 0;
    }

    main {
        background-color: rgba(127, 255, 212, 0.247);
        width: 100%;
        height: 100vh;
    }

    .mudarCor{
        background-image: linear-gradient(to right, rgba(255, 255, 0, 0.37), rgba(255, 0, 0, 0.384));
    }

    .Verde{
        background-color: greenyellow;
    }

    .Azul{
        background-color: lightskyblue;
    }

</style>