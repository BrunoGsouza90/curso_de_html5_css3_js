<script>
  import { contando } from './stores/counterStore.js'

  export default {
    name: 'App',
    computed: {
      conferirContagem() {
        const store = contando()
        return store.contador
      },

      mensagem() {
        const store = contando()
        return store.mensagem
      }
    },
    
    methods: {
      incrementandoContagem() {
        const store = contando()
        store.incrementando()
      },
      decrementandoContagem() {
        const store = contando()
        store.decrementando()
      }
    }
  }
</script>

<template>
  <main>
    <h1>Bem Vindo ao Pinia</h1>
    <p id="contador">{{ conferirContagem }}</p>
    <button @click="incrementandoContagem">Incrementar</button>
    <button v-on:click="decrementandoContagem">Decrementando</button>
    <p id="erro" v-if="mensagem != ''">{{ mensagem }}</p>
  </main>

</template>