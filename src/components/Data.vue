<template>
    <section>
      
        <div class="container">
            <div class="alert alert-warning alert-dismissible" role="alert" v-show="ticket.category == 'estudiantes' ">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <strong>Recuerda</strong> Para adquirir boletas de estudiante debes tener carné Estudiantil vigente.
                </div>
            <div class="row justify-content-md-center">
                
                <div class=" col-md-6  col-xl-6 ">

                    <div id="accordion" role="tablist" aria-multiselectable="true">

                        <ul v-for="n in quantity">
                            <li>
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingOne">
                                        <h5 class="mb-0">
                                            <a data-toggle="collapse" style="color: white" data-parent="#accordion" href="#nav"aria-expanded="true" aria-controls="collapseOne">
                                                Datos de {{buyer[n - 1].name}}

                                            </a>
                                        </h5>
                                    </div>
                                    <div class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="card-block">
                                            <form-ticket :buyer="buyer" :ticket="ticket" :numTicket="n" :key="n">
                                            </form-ticket>                                     
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                     
                </div>
                <div class=" col-md-2   col-xl-2 ">
                    <shoppingcart :numtickets="quantity" :addedname="ticket.name" :total="total"></shoppingcart>
                    <button  style="margin: 40px"  class="btn btn-primary" @click="doPayment(buyer)">Ir a pagar</button>                
                </div>
            </div>
        </div>
        <buttoms :previusPage="'/'" ></buttoms>
    </section>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import formTicket from './form.vue'
    import buttoms from './Buttom.vue'
    import shoppingcart from './shoppingCart.vue'
    export default {
        methods: mapActions({
            doPayment: 'setDataPayment'
        }),
        computed: mapGetters({
            invoice: 'getInvoice',
            ticket: 'getTicket',
            quantity: 'getNumTickets',
            buyer: 'getBuyer',
            num_tickets: 'getNumTickets',
            total: 'getTotal'
        }),
        created() {
            this.$store.dispatch('getTicket')
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.state.tickets.num_tickets  ? next() : next('/')
            })
        },
        components: {
            formTicket: formTicket,
            buttoms: buttoms,
            shoppingcart: shoppingcart
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
    .alert{
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        text-align: center;
    }
</style>