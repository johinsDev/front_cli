<template>
    
        <section>
                           
            <div class="container_form">
              <!--  <div class="redes">                                       
                 <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>                                                    
                  <a href=""><i class="fa fa-google" aria-hidden="true"></i></a>                                   
                </div>-->
                <form class="form"  @submit.prevent="singin({email, password})">
                    <md-input-container >
                        <label>nombre</label>
                        <md-input  v-model="nombre" type="text" maxlength="20"></md-input>
                    </md-input-container>
                    <md-input-container type="text" >
                        <label>email</label>
                        <md-textarea v-model="email" maxlength="70"></md-textarea>
                    </md-input-container>

                    <md-input-container >
                        <label>password</label>
                        <md-input  v-model="password" type="password" maxlength="20"></md-input>
                    </md-input-container>
                   <!--<md-button class="md-raised md-primary btnIngresar" >Ingresar</md-button>-->
                   <button class="button">Registrarse</button>
                </form> 
             <div class="footer_form">
                Y tienes cuenta? <router-link class="link" to="/singin" v-if="!authenticate">Inicia sesión</router-link>
            </div>   
                  
            </div>
           
        
    </section>
</template>

<script>
    import {mapState, mapActions } from 'vuex';

    export default{
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: mapActions({
            singup: 'register'
        }),
        created() {
            this.$store.dispatch('getToken')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                !vm.$store.state.auth.authenticate ? next() : next('/me')
            })
        }
    }
</script>
<style  scoped>

.redes  {
    background: white;
    height: 100px;
    text-align: center;
}
.fa-google,.fa-facebook-square{
    color: black;
    font-size: 40px; 
    margin: 30px ;
}
.container h2{
    text-align: center;
    font-size: 20px;
    margin:10px auto;
    text-decoration: underline;
    
}

.container_form{
    box-shadow: 0px 0px 3px grey;
    background:white;
    max-width: 500px;
    margin: 100px auto;
     height: 50vh;
  
}
.form{
    width: 80%;
    margin:  auto;
}
/*botones*/
.btnIngresar{
    margin: 30px auto;
    width:100%;  
}

/*footer del formulario*/
.footer_form{

    width: 50%;
    margin: auto;
}

</style>