<script>

    export default{
        name:'App',
        data(){
            return{
                
            }
        }
    }

</script>

<template>

    <slot></slot>
    <slot name="titulo"></slot>
    <slot name="descricao"></slot>

</template>