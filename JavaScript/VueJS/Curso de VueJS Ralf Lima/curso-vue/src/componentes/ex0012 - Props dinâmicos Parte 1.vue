<template>
    
    <Ex0012 :cidade="cidade" :cidades="cidades" :funcao="mensagem"></Ex0012>

</template>

<script setup>

    import Ex0012 from './ex0012 - Props dinâmicos Parte 2.vue';

    let cidade = 'São Paulo';

    let cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Minas Gerais', 'Florianópolis']

    function mensagem () {

        alert('Função criada no componente: ex0012 - Props dinâmicos Parte 1');
        
    }

</script>