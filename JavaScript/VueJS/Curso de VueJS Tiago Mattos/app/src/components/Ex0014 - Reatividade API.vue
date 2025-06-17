<script>
import { ref } from 'vue';

export default {
  name: 'App',

  setup() {
    const usuario = ref({
      nome: 'Bruno Gonçalves de Souza',
    })

    const mudarNome = () => {
      usuario.value.nome = window.prompt('Digite o novo nome:');
    }

    return {
      usuario,
      mudarNome
    }
  }
}
</script>

<template>

    <h1>Reatividade API</h1>
    <p>Nome: {{ usuario.nome }}</p>
    <br>
    <button @click="mudarNome()">Mudar nome</button>
    

</template>