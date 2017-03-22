<template>
    <section>
        <div class="container" v-show="checkoutStatus">
            <!--Si el pago es exitoso-->
           <div class="row justify-content-md-center" v-if="checkoutStatus == 'successful'">
               <div class="col-md-12">
                    <h2 style="text-align: center"><i class="fa fa-smile-o" aria-hidden="true"></i> Pago Exitoso</h2>
                    <br/>
                    <h4><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Datos de compra</h4>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Codigo: {{ order.id }}</h3>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Total valor pagado: {{ order.total }}. Cantidad {{ order.quantity }}.</h3>
                   
               </div>
                 <div class="col col-md-8  col-xl-6 ">
                        <div class="card boleta" v-for="ticket in tickets">
                            <div class="card-block">
                                <h4 class="card-title" v-if="ticket.category == 'estudiantes'">Boleta Estudiante</h4>
                                <h4 class="card-title" v-else>Boleta Profesional</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                   <div class="logo_boleta">
                                       <img src="../../assets/imgClic.svg" alt="">
                                   </div>
                                <p class="card-text">Codigo: {{ ticket.id }}</p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.name }} {{ ticket.assist.last_name }}</p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.cc }} </p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.email }} </p>
                            </div>
                        </div>
                 </div>
               <router-link class="link" to="/"><h3>Regresar al inicio</h3></router-link>
            </div>

             <!--Si el pago fue rechasado-->   
              <div class="row justify-content-md-center" v-else>
                   <div class="col-md-12">
                    <h2 style="text-align: center"><i class="fa fa-frown-o" aria-hidden="true"></i> Tu pago esta {{ state }}</h2>
                    <br/>
               </div>

               <div class="col-md-12"  v-show="checkoutStatus == 'failed'">
                    <h2 style="text-align: center">Por favor intenta nuevamente o comunicate con tu sucursal bancaria</h2>
                    <router-link class="link" to="/confirmation"><h3>Intentar nuevamente</h3></router-link>
               </div>
                <div class="col-md-12"  v-show="checkoutStatus == 'pending'">
                  <h2 style="text-align: center">Tu transaccion esta pendiete de pago <a :href="urls.url" target="_blank">ir a url de pago</a></h2>
                    <a  :href="urls.file">Descargar tiquete de pago</a>
                </div>
              </div>
            </div>
        </div>
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            checkoutStatus : 'checkoutStatus',
            tickets: 'getTicketsBuy',
            order: 'getOrder',
            urls: 'getUrls',
            state: 'getState'
        }),
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.state.checkout.checkoutStatus  ?  next() : next('/confirmation')
            })
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