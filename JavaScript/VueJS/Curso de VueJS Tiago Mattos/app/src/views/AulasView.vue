<script>

    //import Ex001 from './components/Ex001 - Estrutura de Condição.vue' 
    //import Ex002 from './components/Ex002 - Laço de Repetição.vue'
    //import Ex003 from './components/Ex003 - Estrutura v-bind.vue'
    //import Ex004 from './components/Ex004 - Classes e Estilos.vue'
    //import Ex005 from './components/Ex005 - Estrutura v-model.vue'
    //import Ex006 from './components/Ex006 - Eventos.vue'
    //import Ex007 from './components/Ex007 - Propriedade Computada.vue'
    //import Ex008 from './components/Ex008 - Watch.vue'
    //import Ex009 from './components/Ex009 - Ciclo de Vida.vue'
    //import Ex010 from './components/Ex010 - Componentes slot.vue'
    //import Ex011 from './components/Ex011 - Scoped e Global CSS.vue'
    //import Ex012 from './components/Ex0012 - Componente Filho.vue'
    import Ex013 from '../components/Ex0013 - Composition API.vue'
    import Ex014 from '../components/Ex0014 - Reatividade API.vue'

    export default{
        name: 'App',
        data(){
            return{

            }
        },

        components:{
            Ex014
        },  

        methods:{

        }
    }

</script>

<template>

    <main id="aulas">
        <hr>
        <h1>Aulas do Curso</h1>
        <hr><br>
        <Ex014/>
    </main>

</template>