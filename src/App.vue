<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link exact to="/">Boletas</router-link>
        <router-link to="/singin" v-if="!authenticate">Inicio de sesion</router-link>
        <router-link to="/payment" v-if="authenticate">Pagar</router-link>
        <a @click="logout" v-if="authenticate">Cerrar sesion</a>
        <hr>
        <ul>
            <li v-for="error in errors">{{ error.error }}</li>
        </ul>
        <router-view></router-view>
    </section>
</template>
<style>
    .router-link-active{
        color: red;
    }
</style>
<script>
    import { mapGetters , mapState , mapActions} from  'vuex'
    export default {
        computed: {
            ...mapState(['authenticate' , 'token']),
            ...mapGetters({'errors' : 'getErrors' , 'authenticate':'isAuthenticate'}),
        },
        methods:mapActions([
                'logout'
        ]),
        created() {
            this.$store.dispatch('getToken')
        },
    }
</script>