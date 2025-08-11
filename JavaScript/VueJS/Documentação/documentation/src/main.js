import { createApp } from 'vue'
import App from './App.vue'
import BotaoAlerta from './components/BotaoAlerta.vue';
import '../src/assets/css/style.css'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {

    console.error('Erro capturado:', err)
    console.log('Componente com erro:', instance)
    console.log('Informação adicional:', info)
    
}

app.component('BotaoAlerta', BotaoAlerta)

app.provide("mensagemProvide", "Essa mensagem foi injetada no \"main.js\".")

app.mount('#app')