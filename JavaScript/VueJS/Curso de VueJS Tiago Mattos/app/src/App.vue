<script>

    export default {
        name: 'App',
        data(){
            return{

            }
        }
    }

</script>

<template>
    <header id="principal">
        <nav>
            <!-- O Vue Router aplica a classe 'router-link-active' por padrão -->
            <RouterLink to="/" active-class="custom-active">Home</RouterLink>
            <RouterLink to="/produtos" active-class="custom-active">Produtos</RouterLink>
            <RouterLink to="/contato" active-class="custom-active">Contato</RouterLink>
            <RouterLink to="/aulas" active-class="custom-active">Aulas</RouterLink>
        </nav>
    </header>
    <main id="principal">
        <RouterView />
    </main>
</template>