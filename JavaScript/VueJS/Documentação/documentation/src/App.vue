<script>

  import { nextTick } from "vue";

  import SintaxeDoModelo from "./components/Aulas/SintaxeDoModelo.vue";
  import PropriedadesCalculadas from "./components/Aulas/PropriedadesCalculadas.vue";
  import RenderizacaoCondicional from "./components/Aulas/RenderizacaoCondicional.vue";
  import RenderizacaoDeLista from "./components/Aulas/RenderizacaoDeLista.vue";
  import UsandoProps from "./components/Aulas/UsandoProps.vue";

  export default {

    components: {

      SintaxeDoModelo,
      PropriedadesCalculadas,
      RenderizacaoCondicional,
      RenderizacaoDeLista,
      UsandoProps

    },

    data() {

      return {

        nome: "Bruno",
        sobrenome: "Gonçalves de Souza",
        idade: 25,
        titulo: "<span class='title-weigth'>\"Documentação Oficial\"</span>"

      }

    },

    methods: {

      async mostrarConteudo() {

        this.$refs.mainContent.style.display = "block";
        this.$refs.mainLoad.style.display = "none";

        await nextTick;

      },

      mensagemDoComponenteFilho(mensagem) {

        window.alert(mensagem)

      }

    },

    mounted() {

      setTimeout(this.mostrarConteudo, 2000);

    }

  }

</script>

<template>

  <BotaoAlerta/>

  <header>
    


  </header>

  <main id="main_content" ref="mainContent">

    <h1 class="title">
      
      Estudos sobre VueJS
      <span v-html="titulo"></span>
    
    </h1>

    <h2 class="ml">Aula 1 - Sintaxe do Modelo</h2>

    <SintaxeDoModelo/>

    <h2 class="ml">Aula 2 - Propriedades Calculadas</h2>

    <PropriedadesCalculadas/>

    <h2 class="ml">Aula 3 - Renderização Condicional</h2>

    <RenderizacaoCondicional/>

    <h2 class="ml">Aula 4 - Renderização de Lista</h2>

    <RenderizacaoDeLista/>

    <h2 class="ml">Aula 5 - Usando Props</h2>

    <UsandoProps :nome="nome" :sobrenome="sobrenome" :idade="idade" @avisarComponentePai="mensagemDoComponenteFilho"/>

  </main>

  <main id="main_load" ref="mainLoad">

    <h1 class="title">Carregando...</h1>

    <p>Bem-Vindo aos meus estudos sobre VueJS com a Documentação Oficial.</p>

    <div class="spinner"></div>

  </main>

  <footer>



  </footer>

</template>

<style scoped>

  .ml {

    margin: 20px;

  }

  #main_content {

    display: none;

  }

  #main_load {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }

  .spinner {

    width: 100px;
    height: 100px;
    border: 4px solid #ccc;
    border-top-color: #42b983;
    border-radius: 50%;
    animation: girar 1s linear infinite;
    margin: 20px auto;

  }

  @keyframes girar {

    from {

      transform: rotate(0deg);
    }

    to {

     transform: rotate(360deg);

    }

  }

</style>