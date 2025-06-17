<script>

    export default{

        /* Aqui estamos destruindo nossas libs, eventos e 
                listas. */
        beforeUnmount(){
            console.log('beforeUnmount')
        },
        /* Aqui estamos destruindo nossas libs, eventos e 
                listas. */
        unmounted(){
            console.log('unmounted')
        },
    }

</script>

<template>
    
    <h1>Titulo</h1>

</template>