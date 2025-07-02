<script>

    export default {

        data() {

            const Atributos = {

                id: "atrubito",
                class: "atributo",
                style: "color: blue;"
                
            }

            return {

                Atributos

            }

        }

    }

</script>

<template>

    <div>

        <p v-bind="Atributos">Estamos inserindo atributos aqui dentro por meio do "Bind".</p>

    </div>


</template>