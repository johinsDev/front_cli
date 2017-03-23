<template>
    <section>
        <div class="contenedor">
            <div class="row centered">
                <div class="logo">
                    <img src="dist/logoClic.svg" alt="logo">
                </div>
            </div>

            <div class="nav_principal">
                <div class="row menu text-center ">

                    <div class="col-md-3 ">
                        <router-link class="link" exact to="/">
                            <div class="texto">
                                <h3>Paso 1</h3>
                                <h4>Elegir Boletas</h4>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link class="link" to="/payment">
                            <div class="texto">
                                <h3>Paso 2</h3>
                                <h4>Ingreso de datos por boleta</h4>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link class="link" to="/confirmation">
                            <div class="texto">
                                <h3>Paso 3</h3>
                                <h4>Seleccionar medio de pago</h4>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-3">
                        <router-link class="link" to="/finish">
                            <div class="texto">
                                <h3>Paso 4</h3>
                                <h4>Finalización de compra</h4>
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

        <div class="errores" v-show="errors">
            <ul>
                <li v-for="error in errors">{{ error.error }}</li>
            </ul>
        </div>
        <router-view></router-view>

        <footer-clic></footer-clic>
    </section>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    import Footer from './components/Footer.vue'

    export default {
        computed: {
            ...mapState(['authenticate' , 'token' , 'checkoutStatus']),
            ...mapGetters({'errors': 'getErrors' , 'authenticate':'isAuthenticate' , 'user': 'getUser' , checkoutStatus: 'checkoutStatus' , buyer: 'getBuyer'}),
        },
        methods: mapActions([
            'logout',
            'emptyCart'
        ]),
        created() {
            this.$store.dispatch('getToken')
            this.$store.dispatch('getUser'),
                this.$store.dispatch('getInvoice'),
                this.$store.dispatch('getBuyer'),
                this.$store.dispatch('getNumTickets')
        },
        components: {
            footerClic: Footer
        }
    }

</script>


<style>
    /*estilos generales*/
    /*carrito*/
    
    .title {
        background: white;
        height: 50px;
        text-align: center;
    }
    
    .title .fa-shopping-cart,
    .title .fa-cart-plus {
        background: -webkit-linear-gradient(-90deg, #F55850, #FDAC16);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 50px;
    }
    /*Cartas*/
    
    .card {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    }
    
    .card-header {
     
        border: none;
        background: -webkit-linear-gradient(-90deg, #FDAC16,  #F55850 );
        background: -o-linear-gradient(-90deg, #FDAC16, #F55850 );
        background: -moz-linear-gradient(-90deg, #FDAC16, #F55850 );
        background: linear-gradient(-90deg, #FDAC16,  #F55850);
    }
    
    .collapsed {
        color: white;
    }
    
    .footer-img {
        margin-top: 70px;
        background: white;
    }
    
    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    body {
        background: white;
    }
    
    .container.botones {
        height: 10px;
        margin-top: 0;
        margin-bottom: 100px;
    }
    
    .container {
        font-family: 'Titillium Web', sans-serif;
        padding: 80px;
        background: white;
        margin-top: 70px;
        background: white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        width: 90%;
    }
    /*barra de navegacion- cambiar a sass*/
    
    .nav_principal {
        font-family: 'Titillium Web', sans-serif;
        background: white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    }
    
    .nav_principal h4 {
        font-size: 15px;
    }
    
    .nav_principal h3 {
        font-size: 20px;
    }
    
    .texto {
        margin: 10px 0 0 20px;
        color: grey;
        list-style: none;
    }
    
    .texto:hover {
        text-decoration:  inherit;
    }
    
    .router-link-active .texto {
        margin: 10px 0 10px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        border: none;
        background: -webkit-linear-gradient(-90deg, #26ffd9, #82FF7E);
        background: -o-linear-gradient(-90deg, #26ffd9, #82FF7E);
        background: -moz-linear-gradient(-90deg, #26ffd9, #82FF7E);
        background: linear-gradient(-90deg, #26ffd9, #82FF7E);
        color: black;
        padding: 3px;
    }
    /*/ barra de navegacion*/
    
    .logo {
        height: 150px;
        width: 100%;
        background: linear-gradient(to right, #feff01 -15%, #26ffd9 15%, #feff01, #feff01, #feff01, #26ffd9 85%, #feff01 115%);
    }
    
    .logo img {
        width: 400px;
        display: block;
        margin: auto;
    }
    /*Botones, pasar a sass*/
    
    .btn-primary,
    .btn-primary:hover,
    .btn-primary:active {
        background: #F55850;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        border: none;
        background: -webkit-linear-gradient(-90deg, #F55850, #FDAC16);
        background: -o-linear-gradient(-90deg, #F55850, #FDAC16);
        background: -moz-linear-gradient(-90deg, #F55850, #FDAC16);
        background: linear-gradient(-90deg, #F55850, #FDAC16);
        width: 200px;
    }
    
    .btn-primary.plus,
    .btn-primary.minus,
    .btn-primary.plus:active {
        background: none;
        width: 60px;
        margin: auto 10px auto 5px;
        font-size: 30px;
        border: none;
    }
    
    .fa-plus,
    .fa-minus {
        background: -webkit-linear-gradient(-90deg, #F55850, #FDAC16);
        -webkit-background-clip: text;
        color: transparent;
    }
</style>