<template>
    <!--
        que dejmos hoy traer dato de la boleta por id , enviar datos de la facturacion , y dejar listo el modelo de datos
        y traer datos del usuario , porque no dejar el perfil
    -->
    <div>
        <p>Boleta: </p>
        <p>Precio: </p>
        <form action="" @submit.prevent="doPayment({ buyer , invoice })">
            <h3>Datos del comprandor</h3>
            <label for="names">Nombres</label>
            <input type="text" id="names" v-model="buyer.name">
            <br>
            <label for="last_name">Apellidos</label>
            <input type="text" id="last_name" v-model="buyer.last_name">
            <br>
            <label for="cc">Documento de identidad</label>
            <input type="text" id="cc" v-model="buyer.cc">
            <br>
            <label for="license">Carnet estudiantil</label>
            <input type="text" id="license" v-model="buyer.license">
            <br>
            <label for="email">Email</label>
            <input type="text" id="email" v-model="buyer.email">
            <br>
            <h3>Datos de facturacion</h3>
            <label for="name">Nombres</label>
            <input type="text" id="name" v-model="invoice.name">
            <br>
            <label for="last_name">Apellidos</label>
            <input type="text" id="invoice.last_name" v-model="invoice.last_name">
            <br>
            <label for="cc">Documento de identidad</label>
            <input type="text" id="invoice.cc" v-model="invoice.cc">
            <br>
            <label for="license">Direccion </label>
            <input type="text" id="invoice.address" v-model="invoice.address">
            <br>
            <label for="email">Email</label>
            <input type="text" id="invoice.email" v-model="invoice.email">
            <button>Enviar datos</button>
        </form>
    </div>
</template>

<script>
    import {mapActions , mapGetters} from 'vuex'
    export default{
        methods: mapActions({
            doPayment: 'setDataPayment'
        }),
        computed: mapGetters({
            buyer: 'getBuyer',
            invoice: 'getInvoice'
        }),
        created () {
            this.$store.dispatch('getBuyer'),
            this.$store.dispatch('getInvoice')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if ( vm.$store.state.tickets.added ){
                    !vm.$store.state.auth.authenticate ? next() : next('/payment')
                }else{
                    next('/')
                }
            })
        },
    }
</script>