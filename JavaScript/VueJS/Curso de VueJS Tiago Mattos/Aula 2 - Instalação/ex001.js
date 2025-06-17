const { createApp, ref } = Vue
createApp({
    setup() {
    const message = ref('Meu aplicativo!')
    return {
        message
    }
    }
}).mount('#app')

createApp({
    setup() {
    const message = ref('Meus cursos!')
    return {
        message
    }
    }
}).mount('#cursos')

createApp({
    setup() {
    const message = ref('Minhas fotos!')
    return {
        message
    }
    }
}).mount('#fotos')