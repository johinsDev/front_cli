<template>
    <section>
           <div class="container_form">
        <form class="form" @submit.prevent="create({card , user})">
                <md-input-container>
                        <label>Nombre titular de la tarjeta</label>
                        <md-input type="text" id="names" v-model="user.name"></md-input>
              </md-input-container>
            <md-input-container>
                <label>Email</label>
                <md-input type="email" id="names" v-model="user.email"></md-input>
            </md-input-container>
            <md-input-container>
                <label>Numero telefono</label>
                <md-input type="phone" id="names" v-model="user.phone"></md-input>
            </md-input-container>
               <md-input-container>
                        <label>Numero tarjeta</label>
                        <md-input type="text" id="names" v-model="card.number"></md-input>
              </md-input-container>
                 <md-input-container>
                        <label>Fecha vencimiento</label>
                        <md-input type="text" id="names" v-model="card.expirationDate"></md-input>
              </md-input-container>
                 <md-input-container>
                        <label>Numero de identificacion</label>
                        <md-input type="text" id="names" v-model="user.identificationNumber"></md-input>
              </md-input-container>
                 <md-input-container>
                        <label>cvv</label>
                        <md-input type="text" id="names"></md-input>
              </md-input-container>

            <button class="button">Proceder al pago</button>
        </form>
    </div>
</section>
</template>

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
                    paymentMethod: 'VISA',
                    number: '',
                    expirationDate: ''
                },
                user:{
                    identificationNumber: '',
                    name: '',
                    email: '',
                    phone: ''
                }
            }
        },
        methods: mapActions({
            create: 'setCard'
        }),
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