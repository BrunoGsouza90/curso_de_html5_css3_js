<script>

    export default{
        name: 'App',
        data() {
            return{
                usuario: {
                    primeiro_nome: 'Bruno',
                    ultimo_nome: 'Gonçalves',
                },

                Python: false,
                Javascript: false,
                MySQL: false,
            }
        },

        computed: {
            NomeCompleto() {
                return `${this.usuario.primeiro_nome} ${this.usuario.ultimo_nome}`
            },

            Curso(){
                if (this.Python == true && this.JavaScript == true && this.MySQL == true){
                    return 'Cursos Completos!'
                } else {
                    return 'Cursos Incompletos!'
                }
            }
        },
        
        methods: {
            click() {
                window.alert(`${this.usuario.primeiro_nome} ${this.usuario.ultimo_nome}`)
            }
        }
    }

</script>

<template>
    
    {{ usuario.primeiro_nome }} {{ usuario.ultimo_nome }}
    <button v-on:click="click()">Clique Aqui</button>
    {{ NomeCompleto }}

    <p>
        Esse método deve ser usado sempre que o retorno de uma
        função depender de vários elementos.
    </p>

    <div>
        <input type="checkbox" v-model="Python">
        <label for="Python">Python</label>
    </div>
    <div>
        <input type="checkbox" v-model="JavaScript">
        <label for="JavaScript">JavaScript</label>
    </div>
    <div>
        <input type="checkbox" v-model="MySQL">
        <label for="MySQL">MySQL</label>
    </div>

    <p>{{ Curso }}</p>

</template>

<style>

    button{
        display: block;
        margin: 10px 0px 10px 0px;
    }

</style>