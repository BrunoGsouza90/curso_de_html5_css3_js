<script>

  import SintaxeDoModelo from "./components/Aulas/SintaxeDoModelo.vue";

  export default {

    components: {

      

    },

    data() {

      return {

        titulo: "<span class='title-weigth'>\"Documentação Oficial\"</span>"

      }

    }

  }

</script>

<template>

  <BotaoAlerta/>

  <header>
    


  </header>

  <main>

    <h1 class="title">
      
      Estudos sobre VueJS
      <span v-html="titulo"></span>
    
    </h1>

    <h2>Aula 1 - Sintaxe do Modelo</h2>

    <SintaxeDoModelo/>

  </main>

  <footer>



  </footer>

</template>