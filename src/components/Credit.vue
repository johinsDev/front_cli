<template>
    <form  @submit.prevent="create({card , user})">
        <div class="form-group">
                    <label for="names">Nombre Titular de la cuenta</label>
                    <input type="text" class="form-control" id="names" placeholder="Nombre" v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="date">Numero de Documento Titular</label>
                    <input type="text" class="form-control"  placeholder="Cedula titular"  v-model="user.identificationNumber">
                </div>
                 <div class="form-group">
                    <label for="email">Correo electronico</label>
                    <input type="email" class="form-control" id="email" placeholder="email"  v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="num">Numero Tarjeta</label>
                    <input type="text" class="form-control" id="num" placeholder="Numero" v-model="card.number">
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
                    <input type="number" class="form-control" id="cvv" placeholder="cvv">
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