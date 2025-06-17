<script>

    export default{
        name: 'App',
        data(){
            return{

            }
        },

        components:{

        },

        methods:{

        },

        props: ['variante']
    }

</script>

<template>

    <div :class="['formulario', {'formulario-sucesso': variante === 'sucesso', 'formulario-erro': variante === 'erro'}]">
        Seu formulário foi enviado com sucesso!
    </div>

</template>

<style scoped>

    .formulario{
        background-color: rgba(128, 128, 128, 0.575);
        color: rgba(0, 0, 0, 0.774);
        font: italic 1.1em cursive;
        min-width: 250px;
        max-width: 500px;
        margin: auto;
        margin-top: 20%;
        text-align: center;
        padding: 30px;
        border: 1px solid rgba(0, 0, 0, 0.295);
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.274);
    }

    .formulario-sucesso{
        background-color: rgba(0, 128, 0, 0.247);
        border: 0.5px solid rgba(0, 128, 0, 0.349);
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.274);
        color: rgba(0, 0, 0, 0.774);
        font: italic 1.1em cursive;
        min-width: 250px;
        max-width: 500px;
        margin: auto;
        margin-top: 20%;
        text-align: center;
        padding: 30px;
    }

    .formulario-erro{
        background-color: rgba(255, 0, 0, 0.363);
        border: 0.5px solid rgba(255, 0, 0, 0.288);
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.274);
        color: rgba(0, 0, 0, 0.774);
        font: italic 1.1em cursive;
        min-width: 250px;
        max-width: 500px;
        margin: auto;
        margin-top: 20%;
        text-align: center;
        padding: 30px;
    }

</style>