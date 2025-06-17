<!-- Criação do nosso Template onde faremos o nosso código HTML. -->
<template>
  <p>{{ `Meu nome é ${nome} e eu tenho ${idade} anos!` }}</p>
  <p>{{ numero1 + numero2 }}</p>
</template>

<!-- Crição do Script onde faremos as interações. -->
<script setup>

  /* Criação das variáveis */
  let nome = 'Bruno';
  let idade = 24;
  let numero1 = 15;
  let numero2 = 8;

</script>