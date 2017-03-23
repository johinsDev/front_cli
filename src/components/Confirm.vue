<template>
    <section>

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-6  col-xl-6">
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" style="color: white" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-credit-card" aria-hidden="true"></i> Tarjeta de Credito
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <div class="card-block">
                                    <credit-card></credit-card>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo">
                                <h5 class="mb-0">
                                    <a class="collapsed" style="color: white" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Efecty y Baloto
                                        </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="card-block">
                                    <cash :data="buyer" :ticket="ticket" :quantity="quantity"></cash>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div class="col col-md-2  col-xl-2 ">
                    <shoppingcart :numtickets="quantity" :addedname="ticket.name" :total="total"></shoppingcart>
                </div>
            </div>
        </div>

        <buttoms :previusPage="'/payment'"></buttoms>
    </section>
</template>

<script>
    import creditCard from './Credit.vue'
    import Cash from './Cash.vue'
    import { mapGetters } from 'vuex'
    import buttoms from './Buttom.vue'
    import shoppingcart from './shoppingCart.vue'


    export default {
        data() {
            return {
                traslate: {
                    name: 'Nombre',
                    last_name: 'Apellido',
                    cc: 'Identificacion',
                    license: 'Carnet',
                    email: 'Correro Electronico'
                }
            }
        }, 
        computed: mapGetters({
             checkoutStatus : 'checkoutStatus',
            invoice: 'getInvoice',
            buyer: 'getBuyer',
            ticket: 'getTicket',
            quantity: 'getNumTickets',
            total: 'getTotal'
        }),

        created() {
            this.$store.dispatch('getTicket')
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (vm.$store.state.tickets.num_tickets != 0
                    && typeof vm.$store.state.data.buyer != 'undefined'
                    && vm.$store.state.tickets.num_tickets <= vm.$store.state.data.buyer.length) {
                    next()
                } else {
                    next('/payment')
                };
            })
        },
        components: {
            creditCard,
            buttoms: buttoms,
            cash: Cash,
            shoppingcart: shoppingcart
        }
    }

</script>