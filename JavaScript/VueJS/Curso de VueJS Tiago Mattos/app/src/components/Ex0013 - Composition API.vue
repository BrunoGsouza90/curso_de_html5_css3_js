<script>

    export default{
        name: 'App',
        setup(){
            
            var nome = 'Bruno'

            var Cargo = () =>{
                if(nome == 'Bruno'){
                    var cargo = 'Administrador'
                } else {
                    var cargo = 'Funcionário'
                }
                return cargo
            }

            return{
                nome,
                Cargo
            }
        }
    }

</script>

<template>

    <h1>Composition API Introdução</h1>
    <p>Nome do colaborador: <strong>{{ nome }}</strong>.</p>
    <p>Cargo do colaborador: <strong>{{ Cargo() }}</strong>.</p>

</template>