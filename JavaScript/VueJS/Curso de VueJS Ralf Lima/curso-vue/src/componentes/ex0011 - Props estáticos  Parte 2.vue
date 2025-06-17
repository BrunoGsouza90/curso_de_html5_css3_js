<template>

    <h1>Nome: {{ nome }}</h1>
    <h1>Idade: {{ idade }}</h1>

</template>

<script setup>

    const props = defineProps(['nome', 'idade']);

</script>