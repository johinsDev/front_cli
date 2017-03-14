<template>
    <section>
        <div class="logo">
            <img src="./assets/logoClic.svg" alt="logo">
        </div>
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


<style >
/*Estilos menu superior*/
    nav {
        padding: 40px;
        height: 50px;
        background: #55FFA9;
        text-align: center;
        font-style: inherit;
        font-weight: 900;
        box-shadow:  0px 1px grey;
        cursor: pointer;
    }
    /*estilos logo*/
    .logo{
        height: 50px;
        background: #55FFA9;
    }
    .logo img{
        width: 300px;
        margin: 20px auto;
    }
 
    .link {
        margin: auto 40px;
        font-size: 25px;
        cursor: pointer;
        color: black !important;
    }
    
    .link:hover {
        color: white;
    }
    .errores{
        background: red;
    }
    /*estilos Botones*/
   .button {
  
	background: #f3465c;
	color:#fff;
	display:inline-block;
	font-size:1.15em;
	padding:10px 0;
	text-align:center;
	width:200px;
	text-decoration:none;
    cursor: pointer;
    border: none;    
    border-radius: 5px;
    box-shadow: 0px 0px 3px grey;
    font-style: inherit;
    font-weight: 900;
    text-transform: uppercase;
}
</style>