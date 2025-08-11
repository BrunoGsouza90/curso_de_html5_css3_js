<script>

    export default {

        inject: ["mensagemProvide"],

        data() {

            return {



            }

        }

    }

</script>

<template>

    <div class="card">

        <div v-if="$slots.header" class="card-header">

            <slot name="header"></slot>

        </div>


        <div v-if="$slots.main" class="card-main">

            <slot name="main"></slot>

        </div>
        
        <div v-if="$slots.footer" class="card-footer">

            <slot name="footer"></slot>

        </div>

        <div v-if="$slots.default" class="card-default">

            <slot name="default"></slot>

        </div>

    </div>

    <p>{{ mensagemProvide }}</p>

</template>