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
            'logout'
        ]),
        created() {
            this.$store.dispatch('getToken')
            this.$store.dispatch('getUser'),
            this.$store.dispatch('getInvoice'),
            this.$store.dispatch('getBuyer'),
            this.$store.dispatch('getNumTickets')
        },
        components:{
            footerClic: Footer
        }
    }

</script>


<style >
/*estilos generales*/
/*carrito*/
    .title{
       background: white;
        height: 50px;
        text-align: center;

    }
   .title .fa-shopping-cart, .fa-cart-plus, .fa {
        color:  #1AC1B6;
        font-size: 50px;
        
    }
    .shoping_card{
        padding: 0;
    }
    .shoping_card card_text{
        paddign: 20px;
    }
/*Cartas*/
.card{
            background: #D3E5E9;
             box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0   rgba(0,0,0,.12);
    }
  .card-header{     
         box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0   rgba(0,0,0,.12);
        background: #1AC1B6; 
        background: -webkit-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -o-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -moz-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        
    }
      
    .collapsed{
        color: white;
    }

.footer-img{
  
        margin-top: 70px;
        background: white;
}
   ul,li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
body{
   background:  #D3E5E9; 
}
.container.botones{
        height: 10px;
        margin-top: 0;
        margin-bottom: 100px;
}
 .container {
         font-family: 'Titillium Web', sans-serif;
     padding: 80px;
    background:white;
        margin-top: 70px;
     background: white;
     width: 90%; 
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0   rgba(0,0,0,.12);
    }
/*barra de navegacion- cambiar a sass*/
.nav_principal{
     font-family: 'Titillium Web', sans-serif;
     border: 1px solid #81C4CA ;
     background: white;
}
.nav_principal h4 { 
   font-size: 15px; 
}
 .nav_principal h3{
   font-size: 20px; 
 }
    .texto{    
        margin: 10px 0 0 20px;
    }

  .router-link-active .texto {
       margin: 10px 0 0 20px;
       border-radius: 5px;    
       background: #2AA2AB;
       color: white;
    }
    .link {
        font-size: 10px;
        text-decoration: none;
    }
/*/ barra de navegacion*/    
  
    .logo {
        
        height: 150px;
        width: 100%;
        background: #1AC1B6; 
        background: -webkit-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -o-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -moz-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
    }
    
    .logo img {
        width: 400px;
        display: block;
        margin: auto;
    }

    /*Botones, pasar a sass*/
    .btn-primary, .btn-primary:hover, .btn-primary:active{
       background: #1AC1B6; 
       border: 1px solid #1AC1B6;
        background: -webkit-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -o-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: -moz-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
        background: linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
         width: 200px;
    }
 

    .btn-primary.plus, .btn-primary.minus, .btn-primary.plus:active{
     background: none;
     width: 50px;
       font-size: 30px;
       border: none;
    }
    .fa-plus, .fa-minus{
      
     background: -webkit-linear-gradient(-90deg, #1AC1B6, #2AA2AB); 
  -webkit-background-clip: text;
  color: transparent;  
    }


</style>