<template>
    <section>
        <div class="logo">
            <img src="../assets/logoClic.svg" alt="logo">
            <div v-if="authenticate">
                Hola {{ user.email }}
            </div>
        </div>

        <nav>
            <router-link class="link"  exact to="/">Boletas</router-link>
            <router-link class="link" to="/singin" v-if="!authenticate">Inicio de sesion</router-link>
            <router-link class="link" to="/me" >Perfil</router-link>
            <router-link class="link" to="/payment" >Datos de Compra</router-link>
            <router-link class="link" to="/confirmation">Confirmacion de pago</router-link>

            <a @click="logout" v-if="authenticate">Cerrar sesion</a>
            <div class="errores" v-show="error">
                <ul>
                    <li v-for="error in errors">{{ error.error }}</li>
                </ul>
            </div>

            <div v-if="checkoutStatus">
                Pago exitoso felicidades
            </div>
            <router-view></router-view>
        </nav>
    </section>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['authenticate' , 'token' , 'checkoutStatus']),
            ...mapGetters({'errors': 'getErrors' , 'authenticate':'isAuthenticate' , 'user': 'getUser' ,    checkoutStatus: 'checkoutStatus' , invoice: 'getInvoice'}),
        },
        methods: mapActions([
            'logout'
        ]),
        created() {
            this.$store.dispatch('getToken')
            this.$store.dispatch('getUser'),
            this.$store.dispatch('getInvoice')
        },
    }

</script>


<style >
/*Estilos menu superior*/
.router-link-active{
   text-decoration: underline;
   color: black !important;
   background: white;
   border: 5px solid #000;
}
    nav {
        padding: 30px;
        height: 50px;
        background: linear-gradient(to bottom, #ef167d , #ffc902);
        text-align: center;
        font-style: inherit;
        font-weight: 900;
        box-shadow:  0px 1px grey;
        cursor: pointer;
        text-transform: uppercase;
        
    }
    /*estilos logo*/
    .logo{
        height: 50px;
         background:#ef167d ;
    }
    .logo img{
        width: 200px;
        margin: 20px auto;
       
    }
 /*/logo*/
/*estilos rutas*/
    .link {
        margin: auto 15px;
        font-size:20px;
        cursor: pointer;
        
    }
    .md-theme-default a:not(.md-button){
        color: rgba(0,0,0, 0.3) ;
    }
    .link:hover {
        color: white;
        text-decoration: none;
    }
    .errores{
        background: red;
    }
/*estilos rutas*/

    /*estilos Botones*/
   .button {
  
	background: none;
	color:#000;
	display:inline-block;
	font-size:1.15em;
	padding:10px 0;
	text-align:center;
	width:200px;
	text-decoration:none;
    cursor: pointer;
    border: none;    
    font-style: inherit;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 40px;
    margin-bottom: 0;
    border: 5px solid #000;

}
@media screen and (min-width: 1000px){
    nav{
        padding: 40px;
        height: 30px;
      
    }
   
    .logo img{
        width: 200px;
        margin: 20px auto;
       
    }
}
</style>