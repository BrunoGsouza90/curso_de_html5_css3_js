<script setup>

    // https://jsonplaceholder.typicode.com/    -    Link para APIs Falsas.

    import { onMounted, ref } from 'vue';

    let vetor = ref([]);

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(retorno => retorno.json())
        .then(retorno => vetor.value = retorno)
    });

</script>

<template>
    
    <h1>Extra requisições</h1>
    <table>
        <tr v-for="v in vetor">
            <td>{{ v.albumId }}</td>
            <td>{{ v.id }}</td>
            <td>{{ v.title }}</td>
            <td>{{ v.url }}</td>
            <td>{{ v.thumbnailUrl }}</td>
        </tr>
    </table>

</template>