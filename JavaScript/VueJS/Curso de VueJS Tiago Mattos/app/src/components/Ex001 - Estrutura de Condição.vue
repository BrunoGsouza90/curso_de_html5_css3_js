<script>

    export default {
        name: 'App',
        data() {
            return {
                nome: 'Bruno',
                sobrenome: 'Gonçalves de Souza',
                mostrar_nome: true
            }
        }
    }

</script>

<template>
    
    <h1>Estruturas de Condição : <q><em>v-if, v-else-if, v-else</em></q></h1>
    <p v-if="nome == 'Admin' || nome == 'Bruno'">Administrador</p>
    <p v-else-if="nome == 'Jorge'">Gerente</p>
    <p v-else-if="nome == 'Eduardo'">Funcionário</p>
    <p v-else>Usuário Anônimo</p>

    <h1>Estruturas de Condição : <q><em>v-show</em></q></h1>
    <p v-show="mostrar_nome">
        {{ nome }}
        {{ sobrenome }}
    </p>

</template>