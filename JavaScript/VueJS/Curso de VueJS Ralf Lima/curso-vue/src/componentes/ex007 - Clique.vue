<style>

    .cinza {

        background: gray;    

    }

    .vermelho {

        background: red;  

    }

    .azul {

        background: blue;

    }

    .verde {

        background: green;

    }

    button {

        background-color: rgba(128, 128, 128, 0.507);
        border: 2px solid skyblue;
        width: 250px;
        height: 250px;
        border-radius: 100%;
        font-size: 20pt;
        font-family:'Times New Roman', Times, serif;

    }

</style>

<template>

    <button @click="Clicar" @mouseenter="Entrar" @mouseout="Sair" :class="cor" v-html="texto"></button>
    
</template>

<script setup>

    import { ref } from 'vue';

    var cor = ref('cinza')
    var texto = ref('Interaja...')

    function Clicar() {

        cor = 'green'
        texto.value = 'Cliquei'

    }

    function Entrar() {

        cor = 'azul'
        texto.value = 'Entrei'

    }

    function Sair() {

        cor = 'vermelho'
        texto.value = 'Sair'
        
    }

</script>