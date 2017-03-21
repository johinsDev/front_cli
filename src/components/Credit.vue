<template>
<form @submit.prevent="create(card)">
                <div class="form-group">
                    <label for="name">Nombre Titular de la cuenta</label>
                    <input type="text" class="form-control" id="names" placeholder="Nombre" v-model="card.name">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Numero Tarjeta</label>
                    <input type="text" class="form-control" id="num" placeholder="Numero" v-model="card.name">
                </div>
                <div class="tarjetas">
                    <img src="../../assets/logos-tarjetas-credito.png" width="200" alt="tarjetas de credito">
                  </div> 
                 <div class="form-group">
                    <label for="date">Fecha de vencimiento</label>
                    <input type="text" class="form-control" id="date" placeholder="Fecha" v-model="card.expirationDate">
                </div>
                <div class="form-group">
                    <label for="date">Numero de Documento Titulae</label>
                    <input type="text" class="form-control" id="date" placeholder="Fecha"  v-model="card.identificationNumber">
                </div>
                 <div class="form-group">
                    <label for="exampleInputPassword1">cvv</label>
                    <input type="email" class="form-control" id="emailC" placeholder="email">
                </div>
                   
                <button class="btn btn-primary">Proceder al pago</button>
                
</form>
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