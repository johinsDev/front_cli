<template>
    <section>
        <div class="contenedor">
            <div class="row centered">
                <div class="logo">
                    <img src="../assets/logoClic.svg" alt="logo">
                   
                </div>
            </div>

            <div class="row menu text-center ">

                <div class="col-md-4 ">
                    <router-link class="link" exact to="/">
                        <h1>1</h1>
                        <h4>Boletas</h4>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link class="link" to="/payment">
                        <h1>2</h1>
                        <h4>Datos de Compra</h4>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link class="link" to="/confirmation">
                        <h1>3</h1>
                        <h4>Confirmacion de pago</h4>
                    </router-link>
                </div>
            </div>

        </div>

        <div class="errores" v-show="errors">
            <ul>
                <li v-for="error in errors">{{ error.error }}</li>
            </ul>
        </div>

        <div v-if="checkoutStatus">
            Pago exitoso felicidades
        </div>
        <router-view></router-view>

    </section>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['authenticate' , 'token' , 'checkoutStatus']),
            ...mapGetters({'errors': 'getErrors' , 'authenticate':'isAuthenticate' , 'user': 'getUser' , checkoutStatus: 'checkoutStatus' , buyer: 'getBuyer'}),
        },
        methods: mapActions([
            'logout'
        ]),
        created() {
            this.$store.dispatch('getToken')
            this.$store.dispatch('getUser'),
                this.$store.dispatch('getInvoice'),
                this.$store.dispatch('getBuyer')
        },
    }

</script>


<style>
body{
    background: #E7EBF0;
}
    .router-link-active h1  {
        
        text-decoration: none;
        background: #025AA5;
        color: white;
        width: 50px;
        margin: auto;
        border-radius: 50%;
       
    }
    h1, h4{
        color: grey;
    }
    .link {
        font-size: 30px;
        text-decoration: none;
        background: black;
        
    }
    
    template {
        height: 100vh;
        background: white;
    }
    
    .logo {
        
        height: 150px;
        width: 100%;
        background: #5682A3;
    }
    
    .logo img {
        width: 400px;
        display: block;
        margin: auto;
    }
</style>