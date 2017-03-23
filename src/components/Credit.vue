<template>
    <form  @submit.prevent="doPayment({
                     card:card, user: user, ticket: ticket.id, data: data, quantity: quantity, payment_method:payment_method
                    })">
                <formUser :user="user"></formUser>
                <div class="form-group">
                    <label for="num">Numero Tarjeta</label>
                    <input type="text" class="form-control" id="num" @keyup="validateCard(card.number)" placeholder="Numero" v-model="card.number">
                </div>
                <div class="tarjetas">
                    <img src="dist/logos-tarjetas-credito.png" width="200" alt="tarjetas de credito">
                  </div> 
                 <div class="form-group" style="width: 40%; display: inline-block">
                    <label for="date" >Fecha de vencimiento</label>
                    <input type="text" class="form-control" id="date" placeholder="Fecha" v-model="card.expirationDate">
                </div>
                
                 <div class="form-group" style="width: 40%; display: inline-block">
                    <label for="cvv">cvv</label>
                    <input type="number" class="form-control" id="cvv" placeholder="cvv" v-model="card.securityCode">
                </div>
                <button class="btn btn-primary">Pagar</button>
                
</form>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import formUser from './formUser.vue'

    export default{
        data() {
            return {
                card: {
                    securityCode: '',
                    number: '',
                    expirationDate: ''
                },
            }
        },
        props: ['data', 'quantity', 'ticket'],
        computed: mapGetters({
            user: 'getUser',
            payment_method: 'getPaymentMethod'
        }),
        methods: {
            ...mapActions({
                doPayment: 'checkout',
                validateCard: 'setPaymentMethod'
            }),
        },
        components:{
            formUser:formUser
        }
    }
</script>

<style scoped>
    .container_form{
   
    background:white;
    max-width: 800px;
    margin: 50px auto;

}
.form{
    width: 80%;
    margin:  auto;
   
}

</style>