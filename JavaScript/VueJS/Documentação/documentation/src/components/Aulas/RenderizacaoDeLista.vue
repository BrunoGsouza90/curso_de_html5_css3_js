<script>

    export default {

        data() {

            const Carros = [

                "Civic",
                "Camaro",
                "Corolla",
                "Fusca",
                "Saveiro"

            ]

            return {

                Carros

            }

        }

    }

</script>

<template>

    <div>

        <div id="div_carros">

            <h3>Carros:</h3>

            <p v-for="(carro, key) in this.Carros"><strong>{{ key + 1 }}º</strong> - {{ carro }}</p>

        </div>

    </div>

</template>