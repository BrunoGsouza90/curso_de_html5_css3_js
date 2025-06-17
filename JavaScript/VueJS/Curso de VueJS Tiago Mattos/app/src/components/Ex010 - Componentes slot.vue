<script>

    import Ex010_2 from './Ex010_2 - Componentes slot.vue'

    export default{
        name: 'App',
        data(){
            return{

            }
            
    },

    components: {
                Ex010_2
    },

    beforeUpdate(){},
    updated(){},
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){
        console.log(this.$slots)
    }
}

</script>

<template>
    
    <h1>Componentes slot</h1>

    <Ex010_2>

        Eu quero programar!

        <template v-slot:titulo>
            <h1>Aprendendo a usar componentes via slot.</h1>
        </template>

        <template v-slot:descricao>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Facilis nemo ex molestiae tempore
                dolore veniam, quis molestias sequi dignissimos voluptas
                voluptates ullam soluta vero placeat cumque reiciendis
                numquam facere eaque?
            </p>
        </template>

    </Ex010_2>

</template>