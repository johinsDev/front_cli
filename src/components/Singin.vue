<template>
    <section>
                        
            <div class="container_form">
                <!--<div class="redes">                                       
                 <a href="#">INGRESAR CON <i class="fa fa-facebook-square" aria-hidden="true"></i></a>                                                    
                  <a href="">INGRESAR CON<i class="fa fa-google" aria-hidden="true"></i></a>                                   
                </div>-->
                <form class="form"  @submit.prevent="singin({email, password})">
                    <md-input-container type="text" >
                        <label>email</label>
                        <md-textarea v-model="email" maxlength="70"></md-textarea>
                    </md-input-container>

                    <md-input-container >
                        <label>password</label>
                        <md-input  v-model="password" type="password" maxlength="20"></md-input>
                    </md-input-container>
                   <!--<md-button class="md-raised md-primary btnIngresar" >Ingresar</md-button>-->
                   <button class="button">ingresar</button>
                </form> 
             <div class="footer_form">
                <a href="#">¿Olvidaste tu contraseña?</a> 
                <router-link  to="/singup">Registrate</router-link>
            </div>                 
            </div>           
        <div class="logos_inferiores">
            <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4" alt="">
        </div>
    </section>

</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: mapActions({
            singin: 'login'
        }),

        created() {
            this.$store.dispatch('getToken')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if ( vm.$store.state.tickets.added ){
                    !vm.$store.state.auth.authenticate ? next() : next('/me')
                }else{
                    next('/')
                }
            })
        },
    }

</script>
<style  scoped>

/*.redes  {
    background: white;
    height: 80px;
    text-align: center;
}
.redes a{
    display: block;
}
.fa-google,.fa-facebook-square{
    color: black;
    font-size: 40px; 
    margin: 30px ;
   
}*/
.container h2{
    text-align: center;
    font-size: 20px;
    margin:10px auto;
    text-decoration: underline;
}
.logos_inferiores{
 border-top: 2px solid #f3465c;
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
    margin: 50px auto;
}

/*footer del formulario*/
.footer_form{

    width: 50%;
    margin: auto;
}

</style>