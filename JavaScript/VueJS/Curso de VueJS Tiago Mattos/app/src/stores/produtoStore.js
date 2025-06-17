import { defineStore } from 'pinia'

export const useProdutoStore = defineStore('produto', {
    state() {
        return {
            produtos: [
                { id: 1, nome: 'Abacaxi', preco: 'R$ 9,99 Unidade' },
                { id: 2, nome: 'Maçã', preco: 'R$ 4,99 Kg' },
                { id: 3, nome: 'Uva', preco: 'R$ 8,99 Kg' },
                { id: 4, nome: 'Banana', preco: 'R$ 5,99 Kg' },
            ]
        };
    },

    actions: {
        // Caso queira adicionar ações no futuro
    },

    getters: {
        getProdutoByNome: (state) => (nome) => {
            return state.produtos.find(p => p.nome == nome)
        }
    }
});