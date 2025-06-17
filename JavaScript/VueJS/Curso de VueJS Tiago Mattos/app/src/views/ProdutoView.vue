<script>
    import { useProdutoStore } from '../stores/produtoStore'

    export default{
        name: 'ProdutoView',
        props: ['nome'],
        data(){
            return {
                nome: this.$route.params.nome
            }
        },
        computed: {
            produto(){
                const store = useProdutoStore();
                return store.getProdutoByNome(this.nome);
            }
        }
    }
</script>

<template>
    <main id="produto">
        <h1>Produto</h1>
        <div v-if="produto">
            <p><strong>Nome do produto:</strong> {{ produto.nome }}.</p>
            <p><strong>Preço do produto:</strong> {{ produto.preco }}.</p>
        </div>
        <div v-else>
            <p>Produto não encontrado.</p>
        </div>
    </main>
</template>