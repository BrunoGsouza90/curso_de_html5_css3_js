<script>

    import Ex009_2 from './Ex009_2 - Ciclo de vida.vue'

    export default{
        name: 'App',
        components: { 
            Ex009_2 
        },
        data(){
            return{
                name: 'Jon Snow',
                permissao: true,
            }
        },

        /* Criação  →   Aqui preparamos o componente.
                        Aqui o Ajax, inicializar algumas 
                            variáveis.
                        Aqui não temos acesso ao (DOM). */

        /* Montagem →   Aqui inicializamos uma lib externa
                            "new( Lib()) ."
                        Aqui precisamos de acesso ao template 
                            (DOM).
                        Aqui temos acesso ao template (DOM).
                        */
        /* Atualização  →   Aqui se faz um processo de Debug.
                            Tudo que é feito no Vue é passado
                                em um processo de "update". */
        /* Desmontagem  →   Aqui removemos tudo que for necessário
                                para liberar memória. */

        
        // Aqui verificamos o Estado e o DOM antes da criação.
        beforeCreate() {
            console.log('beforeCreate')
            console.log('Estado:', this.name)
            console.log('DOM:', this.$el)
            console.log('')
        },

        // Aqui verificamos o Estado e o DOM depois da criação.
        created() {
            console.log('Create')
            console.log('Estado:', this.name)
            console.log('DOM:', this.$el)
            console.log('')
        },

        // Aqui verificamos o Estado e o DOM antes da remoção.
        beforeMount(){
            console.log('beforeMount')
            console.log('Estado:', this.name)
            console.log('DOM:', this.$el)
            console.log('')
        },

        // Aqui verificamos o Estado e o DOM antes da remoção.
        mounted(){
            console.log('Mounted')
            console.log('Estado:', this.name)
            console.log('DOM:', this.$el)
            console.log('')
        },
        
        // Aqui verificamos o Elemento antes da atualização.
        beforeUpdate(){
            console.log('beforeUpdate', this.name)
        },

        // Aqui verificamos o Elemento depois da atualização.
        updated(){
            console.log('update', this.name)
        }
    }

</script>

<template>

    <h1>Ciclo de Vida</h1>

    <div>
        <Ex009_2 style="display: inline;" v-if="permissao"></Ex009_2>
        &nbsp;
        <button @click="permissao = !permissao">
            Ativar / Desativar
        </button>
    </div>

    <h1>Hello World</h1>
    <div>
        <input v-model="name" type="text">
        {{ name }}
    </div>

</template>