<template>
    <h1>Nome dos alunos:</h1>

    <!-- Usando o laço de repetição for para imprimir a lista. -->
    <ul>

        <li v-for="nome in nomes">{{ nome }}</li>
        
    </ul>

</template>

<script setup>

    /* Criação de uma váriavel recebendo uma lista. */
    let nomes = ['Alice', 'Bruna', 'Caio', 'Daniel', 'Ellen']

</script>