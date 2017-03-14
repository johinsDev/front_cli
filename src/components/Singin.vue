<template>
    <section>
        <div class="container">                   
            <div class="container_form">
                <div class="redes">                                       
                 <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>                                                    
                  <a href=""><i class="fa fa-google" aria-hidden="true"></i></a>                                   
                </div>
                <form class="form" novalidate @submit.prevent="signin(email, password)">
                    <md-input-container type="text" v-model="email">
                        <label>email</label>
                        <md-textarea maxlength="70"></md-textarea>
                    </md-input-container>

                    <md-input-container type="password" v-model="password">
                        <label>password</label>
                        <md-input maxlength="20"></md-input>
                    </md-input-container>
                    <md-button class="md-raised md-primary btnIngresar">Ingresar</md-button>
                </form> 
             <div class="footer_form">
                <a href="#">¿Olvidaste tu contraseña?</a> 
                <router-link class="link" to="/">Registrate</router-link>    
            </div>   
                  
            </div>
           
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
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.state.tickets.added ? next() : next('/')
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
.container{
    margin: 40px auto;
  width: 100%; 

 

}
.container_form{
    box-shadow: 0px 0px 3px grey;
    background:white;
    max-width: 500px;
    margin: 100px auto;
  
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