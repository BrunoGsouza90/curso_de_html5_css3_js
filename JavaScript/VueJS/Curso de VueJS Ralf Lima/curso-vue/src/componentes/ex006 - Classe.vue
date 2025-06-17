<style>

    .ok {
        color: green;
    }

    .falha {
        color: red;
    }

</style>

<template>

    <!-- Utilizando o Vue Class com operações ternárias. -->
    <p :class="validacao ? 'ok' : 'falha'">Utilizando a diretiva class.</p>

    <p :class="validacao1 ? 'ok' : 'falha'">Utilizando a diretiva class.</p>
    
    <input :class="validacao ? 'ok' : 'falha'"  type="text">

</template>

<script setup>

    let validacao = true;
    let validacao1 = false;

</script>