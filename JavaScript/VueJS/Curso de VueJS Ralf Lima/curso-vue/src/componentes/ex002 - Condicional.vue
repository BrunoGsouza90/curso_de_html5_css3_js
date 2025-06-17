<template>

  <!-- Criação de uma estrutura condicional "if" . -->
  <h1 v-if="exibir">Hello world!</h1>
  <h1 v-if="exibir1">Olá, mundo!</h1>

  <!-- Aplicando a Estrutura de Condição. -->
  <p v-if="nota >= 7">Aprovado(a)!</p>
  <p v-else-if="nota >= 6.0">Em recuperação!</p>
  <p v-else="nota < 6">Reprovado(a)!</p>

</template>

<script setup>

  let exibir = true;
  let exibir1 = false;
  let nota = window.prompt('Digite a nota: ')

</script>