<template>
    <section>
  
<div>
    
</div>
<md-menu md-align-trigger>
  <md-button md-menu-trigger></md-button>

  <md-menu-content>
    <md-menu-item>My Item 1</md-menu-item>
  
  </md-menu-content>
</md-menu>

<md-menu :md-offset-x="154" md-offset-y="12">
  <md-button md-menu-trigger>usuario</md-button>

  <md-menu-content>
    <md-menu-item>cerrar sesion</md-menu-item>
    
  </md-menu-content>
</md-menu>
       <nav>    
         <router-link class="link" to="/">Boletas</router-link>
        <router-link class="link" to="/singin">Registro</router-link>
        <router-link class="link" to="/">Condiciones</router-link>
        <router-link class="link" to="/">pagar</router-link>
        <router-link class="link" to="/">confirmacion</router-link>
        <router-view></router-view>
       </nav>    
        <!-- <ul>
            <li v-for="error in errors">{{ error.error }}</li>
        </ul>-->
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


<style scoped>
nav{
    padding: 40px;
    height: 50px;
    background: #3949AB;     
    text-align: center;  
}
.link{
    margin: auto 40px;
    font-size: 25px;
    cursor: pointer;
    color: white !important;
}
.link:hover{
    color: white;
}
</style>