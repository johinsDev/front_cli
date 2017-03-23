<template>
    <section>
        <div class="container" >
            <!--Si el pago es exitoso-->
                <Successful :order='order' :tickets='tickets' :urls='urls' :checkoutStatus='checkoutStatus' :state='state'></Successful>
             <!--Si el pago fue rechasado-->   

              <Declined :order='order' :tickets='tickets' :urls='urls' :checkoutStatus='checkoutStatus' :state='state'></Declined>
            </div>
       
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Successful from './SuccessfulPayment.vue'
    import Declined from './PaymentDeclined.vue'

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
        components:{
            Successful: Successful,
            Declined: Declined
        }
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