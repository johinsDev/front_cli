<template>
    <section>
        <md-toolbar class="md-medium">
            <div class="md-toolbar-container">
                <md-button class="md-icon-button">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1;"></h2>

                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>filter_list</md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <nav>
            <router-link class="link" exact to="/">Boletas</router-link>
            <router-link class="link" to="/singin" v-if="!authenticate">Inicio de sesion</router-link>
            <router-link class="link" to="/me" v-if="authenticate">Perfil</router-link>
            <router-link class="link" to="/payment" v-if="authenticate">Pagar</router-link>
            <a @click="logout" v-if="authenticate">Cerrar sesion</a>
            <div class="errores">
                <ul>
                    <li v-for="error in errors">{{ error.error }}</li>
                </ul>
            </div>

            <router-view></router-view>
        </nav>

    </section>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['authenticate' , 'token']),
            ...mapGetters({'errors': 'getErrors' , 'authenticate':'isAuthenticate'}),
        },
        methods: mapActions([
            'logout'
        ]),
        created() {
            this.$store.dispatch('getToken')
        },
    }

</script>


<style scoped>
    nav {
        padding: 40px;
        height: 50px;
        background: #3F51B5;
        text-align: center;
    }
    
    nav a {
        cursor: pointer;
    }
    
    .link {
        margin: auto 40px;
        font-size: 25px;
        cursor: pointer;
        color: white !important;
    }
    
    .link:hover {
        color: white;
    }
    .errores{
        background: red;
    }
</style>