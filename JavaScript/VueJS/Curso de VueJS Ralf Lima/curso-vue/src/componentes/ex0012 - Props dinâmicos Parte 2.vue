<script setup>

    const props = defineProps(['cidade', 'cidades', 'funcao']);

</script>

<template>
    
    <p>Cidade: {{ cidade }}</p>

    <ul>
        <li v-for="cidade in cidades">{{ cidade }}</li>
    </ul>

    <button @click="funcao">Clique aqui</button>

</template>