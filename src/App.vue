<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/singin">Inicio de sesion</router-link>
        <hr>
        <ul>
            <li v-for="error in errors">{{ error.error }}</li>
        </ul>
        <router-view></router-view>

    </section>
</template>

<script>
    import { mapGetters } from  'vuex'
    export default {
        computed: mapGetters({
            'errors': 'getErrors'
        }),
    }
</script>