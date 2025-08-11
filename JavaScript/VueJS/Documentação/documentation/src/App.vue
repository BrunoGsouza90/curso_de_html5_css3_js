<script>

  import { nextTick } from "vue";

  import SintaxeDoModelo from "./components/Aulas/SintaxeDoModelo.vue";
  import PropriedadesCalculadas from "./components/Aulas/PropriedadesCalculadas.vue";
  import RenderizacaoCondicional from "./components/Aulas/RenderizacaoCondicional.vue";
  import RenderizacaoDeLista from "./components/Aulas/RenderizacaoDeLista.vue";
  import UsandoProps from "./components/Aulas/UsandoProps.vue";
  import ComponentesDeSlot from "./components/Aulas/ComponentesDeSlot.vue";

  export default {

    components: {

      SintaxeDoModelo,
      PropriedadesCalculadas,
      RenderizacaoCondicional,
      RenderizacaoDeLista,
      UsandoProps,
      ComponentesDeSlot

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

      },

      BotaoComponenteSlot() {

        window.alert("Você clicou no botão de Componente de Slot!")

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

    <h2 class="ml">Aula 6 - Usando Slots</h2>

    <ComponentesDeSlot>

      <template #header>

        <h1 class="slot">Slot Header</h1>

      </template>

      <template #main>

        <h1>Slot Default</h1>
        <p><strong>Variável "nome":</strong> {{ nome }}.</p>
        <p><strong>Variável "sobrenome":</strong> {{ sobrenome }}.</p>

      </template>

      <template #footer>

        <h1>Slot Footer</h1>

      </template>

      <template #default>

        <button @click="BotaoComponenteSlot()" type="button">Componente de Slot</button>

      </template>

    </ComponentesDeSlot>

  </main>

  <main id="main_load" ref="mainLoad">

    <h1 class="title">Carregando...</h1>

    <p>Bem-Vindo aos meus estudos sobre VueJS com a Documentação Oficial.</p>

    <div class="spinner"></div>

  </main>

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