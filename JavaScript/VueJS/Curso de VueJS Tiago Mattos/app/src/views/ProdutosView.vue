<script>

    import { useProdutoStore } from '../stores/produtoStore'

    export default{
        name: 'App',
        data(){
            return{
                
            }
        },
        computed:{
            produtos(){
                const store = useProdutoStore()
                return store.produtos
            },
        }
    }

</script>

<template>

    <main id="produtos">
        <h1>Produtos</h1>
        <ul v-for="produto in produtos" :key="produto.nome">
            <li>
                <RouterLink :to="`/produtos/${produto.nome}`">{{ produto.nome }}</RouterLink>
            </li>
        </ul>
    </main>

</template>
