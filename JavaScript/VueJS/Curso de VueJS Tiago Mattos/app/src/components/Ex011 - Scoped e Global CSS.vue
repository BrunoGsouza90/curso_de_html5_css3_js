<script>
    
    import Ex011_2 from './Ex011_2 - Scoped e Global CSS.vue';


    export default{
        name: 'App',
        data(){
            return{
                Cor: true,
            }
        },
        components:{
            Ex011_2,
        },
    }

</script>

<template>

    <main>
        <Ex011_2></Ex011_2>
        <div :class="{ 'vermelho': Cor, 'azul': !Cor }">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus enim labore natus, odit dignissimos asperiores,
            praesentium quibusdam accusamus alias necessitatibus corporis
             officia aliquid earum dolore voluptatum incidunt tempore?
             Accusantium, repellat!</p>
        </div>
    </main>

</template>

<style scoped>

    .vermelho{
        color: red;
    }

    .azul{
        color: blue;
    }

</style>