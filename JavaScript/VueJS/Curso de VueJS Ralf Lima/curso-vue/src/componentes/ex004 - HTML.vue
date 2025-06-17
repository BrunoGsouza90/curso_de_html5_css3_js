<template>

    <h1>Aprendendo a Diretiva HTML:</h1>

    <!-- Ao usar a Diretiva HTML todo o HTML é renderizado. -->
    <div v-html="texto"></div>

    <!-- Ao fazer a interpolação o leitor não administra as tags HTML. -->
    <div>{{ texto }}</div>

</template>

<script setup>

    let texto = '<p style="color:red;">Aprendendo a diretiva v-html</p>';


</script>