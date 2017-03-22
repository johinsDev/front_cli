<template>
    <form action="" @submit.prevent="doPayment({
            user: user, ticket: ticket.id, data: data, quantity: quantity, payment_method:payment_method
        })">
        <formUser :user="user"></formUser>
        <input type="radio" v-model="payment_method" value="baloto">Baloto
        <input type="radio" v-model="payment_method" value="efecty">Efecty
        <input class="btn btn-primary" type="submit" value="Enviar datos">
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import formUser from './formUser.vue'

    export default{
        data() {
            return {
                payment_method: 'baloto',
            }
        },
        props: ['data', 'quantity', 'ticket'],
        methods: mapActions({
            doPayment: 'checkout'
        }),
        computed: mapGetters({
            user: 'getUser',
        }),
        components:{
            formUser:formUser
        }
    }
</script>