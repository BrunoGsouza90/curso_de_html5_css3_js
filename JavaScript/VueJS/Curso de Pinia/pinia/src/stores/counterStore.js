import { defineStore } from 'pinia'

export const contando = defineStore('contar', {

  // Estado.
  state(){
    return{
      contador: 0,
      mensagem: '',
    }
  },

  // Ações.
  actions:{
    incrementando(){
      if(this.contador >= 10){
        this.mensagem = 'O contador não pode ser maior que 10!'
      } else if (this.contador < 10){
        this.contador++
        this.mensagem = ''
      }
    },

    decrementando(){
      if(this.contador < 1){
        this.mensagem = 'O contador não pode ser menor que 0!'
      } else {
        this.contador--
        this.mensagem = ''
      }
    }
  },

  // Métodos de Obtenção.
  getters:{
    exibirContagem(state){
      return `O valor do contador é: ${state.contador}!`
    }
  }

})
