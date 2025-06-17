<script>

export default {
    name: 'App',
    data() {
        return {
            nomes: ['Bruno', 'Lucas', 'Eduardo', 'Jorge', 'Maria']
        }
    }
}

</script>

<template>
    
    <h1>Laço de Repetição : <q><em>v-for</em></q></h1>
    <ol type="I">
        <div v-for="nome in nomes">
            <li>{{ nome }}</li>
        </div>
    </ol>

</template>