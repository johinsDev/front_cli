<template>
    <section>
        <div class="container">
            <!--Si el pago es exitoso-->
           <div class="row justify-content-md-center" v-if="1>2">
               <div class="col-md-12">
                    <h2 style="text-align: center"><i class="fa fa-smile-o" aria-hidden="true"></i> Pago Exitoso</h2>
                    <br/>
                    <h4><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Datos de compra</h4>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Codigo: </h3>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Total valor pagado: </h3>
                   
               </div>
                 <div class="col col-md-8  col-xl-6 ">

              
                                   
                   
                        <div class="card boleta">
                        <div class="card-block">
                            <h4 class="card-title">Boleta Estudiante</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                               <div class="logo_boleta">

                                                        <img src="../../assets/imgClic.svg" alt="">
                                                    </div>
                              <p class="card-text">Codigo: </p>                      
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>Nicolas Restrepo</p>
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>1033800785</p>
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>nicolas.retrepo@mocionsoft.com</p>
                            
                        </div>
                        </div>
                                        

                                
                 </div>
                   <div class="col col-md-6 col-xl-6 ">
                        <div class="card boleta">
                        <div class="card-block">
                            <h4 class="card-title">Boleta Estudiante</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                               <div class="logo_boleta">

                                                        <img src="../../assets/imgClic.svg" alt="">
                                                    </div>
                              <p class="card-text">Codigo: </p>                      
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>Nicolas Restrepo</p>
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>1033800785</p>
                            <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>nicolas.retrepo@mocionsoft.com</p>
                            
                        </div>
                        </div>
                                        

                                
                 </div>    
            </div>

             <!--Si el pago fue rechasado-->   
              <div class="row justify-content-md-center" v-else>
                   <div class="col-md-12">
                    <h2 style="text-align: center"><i class="fa fa-frown-o" aria-hidden="true"></i> El pago fue rechazado</h2>
                    <br/>
               </div>

               <div class="col-md-12">       
                <h2 style="text-align: center">Por favor intenta nuevamente o comunicate con tu sucursal bancaria</h2>  
                <router-link class="link" to="/confirmation"><h3>Intentar nuevamente</h3></router-link>
               </div>
            </div>    
            </div>
        </div>  
        <footer class="footer-img" style="bottom: 0; position: absolute; width: 100%">         
            <div class="row text-center">
                <div class="col-md-12">
                  <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                 alt="">
                </div>
            </div>
        </footer>
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            tickets: 'allTickets',
            added: 'getTicket'
        }),
        methods: mapActions([
            'add',
            'next'
        ]),
        created() {
            this.$store.dispatch('getAllTickets'),
                this.$store.dispatch('getTicket')
        },
    }

</script>

<style scoped>
   .link{
       font-size: 30px;
       text-align: center;
   }
   .card.boleta {
        background: white;
        margin-top: 20px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        width: 600px;
   
    }
    .card-title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }    
    .card-subtitle {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

 .logo_boleta {
        position: absolute;
        right: 0;
        width: 130px;
        top: 0;
    }

</style>