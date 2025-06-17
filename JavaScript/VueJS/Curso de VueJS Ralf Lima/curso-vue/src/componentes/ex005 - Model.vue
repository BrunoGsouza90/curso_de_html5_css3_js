<template>

    <input type="text" v-model="texto">

    <p>{{ texto }}</p>

</template>

<script setup>

    /* Importação do módulo "ref" . */
    import { ref } from 'vue';

    let texto = ref('');

</script>