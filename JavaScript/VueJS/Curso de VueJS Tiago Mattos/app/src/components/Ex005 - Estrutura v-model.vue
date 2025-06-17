<script>

    export default{
        name: 'App',
        data(){
            return{
                esportes: '',
                cidades: '',
                Estudar: false,
                Trabalhar: false,
                Treinar: false,
                Passear: false,
                Dormir: false,
                Acordar: false,
            }
        },
        computed: {
            tarefa_cumprida(){ 
                return this.Estudar && this.Trabalhar && this.Treinar && this.Passear && this.Dormir && this.Acordar;
            }
        }
    }

</script>

<template>

    <h1>Estrutura <q><em>v-model</em></q></h1>

    <select v-model="esportes">
        <option value="">Escolha</option>
        <option value="Basquete">Basquete</option>
        <option value="Futebol">Futebol</option>
        <option value="Skateboard">Skateboard</option>
        <option value="Tênis">Tênis</option>
        <option value="Surf">Surf</option>
    </select>
    <p>O esporte escolhido foi: {{ esportes }}.</p>
    
    <form>
        <div>
            <input type="radio" value="Itamonte-MG" v-model="cidades">
            <label for="Itamonte-MG">Itamonte-MG</label>
        </div>
        
        <div>
            <input type="radio" value="Itanhandu-MG" v-model="cidades">
            <label for="Itanhandu-MG">Itanhandu-MG</label>
        </div>

        <div>
            <input type="radio" value="Ubatuba-SP" v-model="cidades">
            <label for="Ubatuba-SP">Ubatuba-SP</label>
        </div>

        <div>
            <input type="radio" value="Itatiaia-RJ" v-model="cidades">
            <label for="Itatiaia-RJ">Itatiaia-RJ</label>
        </div>

        <div>
            <input type="radio" value="Lorena-SP" v-model="cidades">
            <label for="Lorena-SP">Lorena-SP</label>
        </div>

        <div>
            <input type="radio" value="Porto Alegre-RS" v-model="cidades">
            <label for="Porto Alegre-RS">Porto Alegre-RS</label>
        </div>
        <p>Você mora em {{ cidades }}!</p>
    </form>

    <form>
        <div>
            <input type="checkbox" v-model="Estudar">
            <label for="Estudar">Estudar.</label>
        </div>

        <div>
            <input type="checkbox" v-model="Trabalhar">
            <label for="Trabalhar">Trabalhar.</label>
        </div>

        <div>
            <input type="checkbox" v-model="Treinar">
            <label for="Treinar">Treinar.</label>
        </div>

        <div>
            <input type="checkbox" v-model="Passear">
            <label for="Passear">Passear.</label>
        </div>

        <div>
            <input type="checkbox" v-model="Dormir">
            <label for="Dormir">Dormir.</label>
        </div>

        <div>
            <input type="checkbox" v-model="Acordar">
            <label for="Acordar">Acordar.</label>
        </div>

        <p v-show="tarefa_cumprida">Tarefas compridas com sucesso!</p>
    </form>
</template>