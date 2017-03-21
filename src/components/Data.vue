<template>
    <section>
        <div class="container">

            <div class="row justify-content-md-center">

                <div class=" col-md-6  col-xl-6 ">

                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <ul>
                            <li>
                        <div class="card">
                                <div class="card-header" role="tab" id="headingOne">
                                    <h5 class="mb-0">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             Formulario 1
                            </a>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="card-block">
                                        <form-ticket v-for="n in quantity" :buyer="buyer" :ticket="n" :key="n">
                                        </form-ticket>
                                    </div>
                                </div>
                            </div>
                            </li>
                          
                        </ul>

                    </div>
                </div>
                  <div class=" col-md-2   col-xl-2 ">
                    <div class="card " style="width: 300px">

                        <div class="card-block shoping_card">
                            <div class="title">             
                            <h4 class="card-title"><i class="fa fa-shopping-cart" aria-hidden="true"></i></h4>
                            </div>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i>1 Boleta estudiante </h5>
                            </p>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i> Etapa 1 </h5>
                            </p>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i> Total a pagar </h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container botones">
            <!--Botones-->
            <div class="row text-center">
                <div class="col-md-6">
                    <button @click="next('/')" class="btn btn-primary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Anterior</button>
                </div>
                <div class="col-md-6">
                    <button @click="next('/payment')" class="btn btn-primary">Siguiente <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </section>
</template>
 <script>
     import {mapActions , mapGetters} from 'vuex'
     import formTicket from './form.vue'
     export default{
         methods: mapActions({
             doPayment: 'setDataPayment'
         }),
         computed: mapGetters({
             invoice: 'getInvoice',
             ticket: 'getTicket',
             quantity: 'getNumTickets',
             buyer: 'getBuyer'
         }),
         created () {
             this.$store.dispatch('getTicket')
         },
         beforeRouteEnter (to, from, next) {
            next()
         },
         components:{
             formTicket: formTicket
         }
     }

 </script>

<style scoped>
    .container {
        padding: 80px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        margin-top: 70px;
        background: white;
    }
</style>