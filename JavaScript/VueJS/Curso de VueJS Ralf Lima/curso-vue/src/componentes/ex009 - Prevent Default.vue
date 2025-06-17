<template>

    <form action="https://github.com/BrunoGsouza90" target="_blank" @submit="validaFormulario">

        <input type="submit" value="Enviar formulário">

    </form>

</template>

<script setup>

    function validaFormulario(event) {

        alert('Formulário enviado!');

    }

</script>