<script>

    export default {

        data() {

            const Tarefas = {

                acordar: false,
                treinar: false,
                trabalhar: false,
                estudar: false,
                dormir: false

            };

            return {

                Tarefas,
                id_resultado: ""

            }

        },

        computed: {

            resultadoTarefa() {

                let search = Object.values(this.Tarefas).some((tarefa) => {

                    return tarefa == false;

                });

                if(!search) {

                    this.id_resultado = "resultado";

                    return "Tarefas Conclúidas com Sucesso!";

                } else {

                    this.id_resultado = "";
                    
                    return "";

                }

            }

        }

    }

</script>

<template>

    <div class="div_list">

        <div class="div_list_item">

        <input class="input_list_1" type="checkbox" name="acordar" id="acordar" v-model="Tarefas.acordar">
        <input class="input_list" type="checkbox" name="treinar" id="treinar" v-model="Tarefas.treinar">
        <input class="input_list" type="checkbox" name="trabalhar" id="trabalhar" v-model="Tarefas.trabalhar">
        <input class="input_list" type="checkbox" name="estudar" id="estudar" v-model="Tarefas.estudar">
        <input class="input_list" type="checkbox" name="dormir" id="dormir" v-model="Tarefas.dormir">

        </div>

        <div class="div_list_item">
            
            <label class="input_label" for="acordar">Acordar</label>
            <label class="input_label" for="treinar">Treinar</label>
            <label class="input_label" for="trabalhar">Trabalhar</label>
            <label class="input_label" for="estudar">Estudar</label>
            <label class="input_label" for="dormir">Dormir</label>

        </div>

        <div>

            <p v-bind:id="id_resultado">{{ resultadoTarefa }}</p>

        </div>
    
    </div>

</template>