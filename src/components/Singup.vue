<template>
    
        <section>
                           
            <div class="container_form">
              <!--  <div class="redes">                                       
                 <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>                                                    
                  <a href=""><i class="fa fa-google" aria-hidden="true"></i></a>                                   
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
                   <button class="button">Registrarse</button>
                </form> 
             <div class="footer_form">
                Ya tienes cuenta? <router-link  to="/singin" v-if="!authenticate">Inicia sesión</router-link>
            </div>   
                  
            </div>
           
        <div class="logos_inferiores">
            <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                alt="">
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
    
    .container h2 {
        text-align: center;
        font-size: 20px;
        margin: 10px auto;
        text-decoration: underline;
    }
    
    
    .container_form {
        border: 5px solid #000;
        background: white;
        max-width: 500px;
        margin: 100px auto;
        height: 500px;
        
       
    }
    /*campos formulario*/
    .form {
        width: 80%;
        padding: 100px 0 50px 70px;
    }
   
    /*footer del formulario*/
    
    .footer_form {
        width: 50%;
        margin: auto;
    }
    /*logos*/
    .logos_inferiores {
          margin-top: 90px; 
        border-top: 2px solid #f3465c;     
        position: absolute;
        width: 95%;
    }
    @media screen and (max-width:600px){
        .container_form{
            height: 50vh;
        }
    }
</style>