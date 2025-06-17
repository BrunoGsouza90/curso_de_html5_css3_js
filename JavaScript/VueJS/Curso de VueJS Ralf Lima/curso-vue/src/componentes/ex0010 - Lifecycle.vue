<template>
    <div id="msg" :class="cor">
        <h1>{{ texto }}</h1>
    </div>

</template>

<style>

    #msg {

        width: 100vh;
        height: 100vh;
        margin: 5px;

    }

    .green {

        background-color: green;

    }

    .red {

        background-color: red;
        
    }

</style>

<script setup>

    import { onMounted, ref, onUnmounted } from 'vue'

    var texto = ref('Hello World!')
     
    var cor = ref('green')

    function repetindo_texto() {

        texto.value = texto.value === 'Hello World!' ? 'Alterando o texto!' : 'Hello World!'
        cor.value = cor.value === 'green' ? 'red' : 'green'

    }

    onMounted(() => {

        const intervalId = setInterval(repetindo_texto, 3000)

        onUnmounted(() => {

            clearInterval(intervalId)

        })
        
    })

</script>