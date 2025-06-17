<template>

  <!-- Links -->
  <a href="/">Página 1</a>
  |
  <a href="/pagina2">Página 2</a>

  <!-- Exibição das páginas -->
  <component :is="currentView" />

</template>

<!-- Estrutura extraída do site: https://vuejs.org/guide/scaling-up/routing.html -->

<!-- SCRIPT -->
<script setup>

  // Importações do Vue JS.
  import { ref, computed, watch } from 'vue'

  // Páginas.
  import Pagina1 from './Pagina1.vue'
  import Pagina2 from './Pagina2.vue'
  import PaginaErro from './PaginaErro.vue'
  
  // Função responsável por redirecionar a página específica.
  const currentView = computed(() => {

    if(window.location.pathname == '/'){

      return Pagina1

    } else if(window.location.pathname == '/pagina2'){

      return Pagina2

    } else{

      return PaginaErro

    }

  })
  
</script>