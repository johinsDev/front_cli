<template>
    <div>
        <form action="" @submit.prevent="create(card)">
            <input type="text" placeholder="Nombre tarjeta de credito" v-model="card.name">
            <br>
            <input type="text" placeholder="Numero de tarjeta de credito" v-model="card.number">
            <br>
            <input type="text" placeholder="Fecha de vencimiento" v-model="card.expirationDate">
            <br>
            <input type="text" placeholder="Numero de identificacion" v-model="card.identificationNumber">
            <br>
            <input type="text" placeholder="Cvv">
            <br>
            <button>Proceder al pago</button>
        </form>
    </div>
</template>
/
<script>

    //El proceso e sun componete para la tarjeta es decir apra enviar la tarjeta a token
    //para traerlas todas y guardar el token en local
    //luego el componente payment que inicia  el checkout process
    //envia tarjeta , o medio de pago , informacion del usuario y boleta a comprar
    //No olvidar cambia el nombre de funciones del modulo de data
    //pensar tambien en como haremos el pago la funcion de pago del form cuando el token de la tarjeta ya este

    import {mapActions} from 'vuex'

    export default{
        data() {
            return {
                card: {
                    payerId: '10',
                    name: '',
                    identificationNumber: '',
                    paymentMethod: 'VISA',
                    number: '',
                    expirationDate: ''
                }
            }
        },
        methods: mapActions({
            create: 'setCard'
        }),
    }
</script>