<script>

    import Ex012_2 from './Ex0012_2 - Componente Filho.vue'

    export default{
        name: 'App',
        data(){
            return{
                variante: 'erro ',
            }
        },
        components:{
            Ex012_2,
        },
        
        methods:{

        }
    }

</script>

<template>

    <div>
        <Ex012_2 
        :variante="variante">

        </Ex012_2>
    </div>

</template>