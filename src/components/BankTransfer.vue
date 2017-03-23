<template>

    <form @submit.prevent="doPayment({
            bank: {type_client , bank },user: user, ticket: ticket.id, data: data, quantity: quantity, payment_method:payment_method
        })">
        <formUser :user="user"></formUser>
        <label for="bank">Banco</label>
        <select class="form-control" id="bank" v-model="bank">
            <option v-for="bank in banks"
                    :value="bank.pseCode">
                {{ bank.description  }}
            </option>
        </select>
        <label for="type_client">Tipo de cliente</label>
        <select name="" id="type_client" class="form-control" v-model="type_client">
            <option value="N">Persona Natural</option>
            <option value="J">Persona Juridica</option>
        </select>
        <br>
        <button class="btn btn-primary" type="submit">Pagar</button>
    </form>

</template>

<script>

    import {mapGetters , mapActions} from 'vuex'
    import formUser from './formUser.vue'

    export default{
        data() {
            return {
                bank: '1023',
                payment_method: 'PSE',
                type_client: 'N'
            }
        },
        props: ['data', 'quantity', 'ticket'],
        methods: mapActions({
            doPayment: 'checkout'
        }),
        computed: mapGetters({
            banks: 'getBankList',
            user: 'getUser',
        }),
        created() {
            this.$store.dispatch('getBankList')
        },
        components:{
            formUser:formUser
        }
    }

</script>