<template>
    
    <h1>Requisições</h1>

    <table>

        <tr v-for="v in vetor">

            <td>{{ v.userId }}</td>
            <td>{{ v.id }}</td>
            <td>{{ v.title }}</td>
            <td>{{ v.body }}</td>

        </tr>

    </table>

</template>

<script setup>

    // https://jsonplaceholder.typicode.com/    -    Link para APIs Falsas.

    import { onMounted, ref } from 'vue';

    let vetor = ref();

    onMounted(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')

        .then(retorno => retorno.json())
        
        .then(retorno => vetor.value = retorno)

    });

</script>