<template>

    <form @submit="validaFormulario">

        <input type="submit">

        <p v-html="texto"></p>

    </form>

</template>

<script setup>

    import { ref } from 'vue';

    var texto = ref('')

    function validaFormulario(evento) {

        evento.preventDefault();

        texto.value = 'Formulário Enviado!'
        
    }

</script>