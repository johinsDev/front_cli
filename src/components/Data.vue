<template>
    <!--
        que dejmos hoy traer dato de la boleta por id , enviar datos de la facturacion , y dejar listo el modelo de datos
        y traer datos del usuario , porque no dejar el perfil
    -->
    <section>
        <div >
            <div class="boleta">

                <p>Datos seleccionados para la compra</p>
                <p>Boleta: {{ticket.name}} </p>
                <p>Precio: {{ticket.price}}</p>
                <p>Etapa: 1</p>
                <p>Cantidad: {{ quantity }}</p>
            </div>
            <div class="container_form">
                Datos Personales
                   <form-ticket v-for="n in quantity"
                                :buyer="buyer"
                                :ticket="n"
                                :key="n">
                    </form-ticket>
                    <button class="button" @click="doPayment(buyer)">Ir a pagar</button>
             </div>
         </div>
          <div class="logos_inferiores">
             <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                 alt="">
         </div>
     </section>
 </template>

 <script>
     import {mapActions , mapGetters} from 'vuex'
     import formTicket from './form.vue'
     export default{
         methods: mapActions({
             doPayment: 'setDataPayment'
         }),
         computed: mapGetters({
             invoice: 'getInvoice',
             ticket: 'getTicket',
             quantity: 'getNumTickets',
             buyer: 'getBuyer'
         }),
         created () {
             this.$store.dispatch('getTicket')
         },
         beforeRouteEnter (to, from, next) {
            next()
         },
         components:{
             formTicket: formTicket
         }
     }

 </script>

 <style  scoped>

 .boleta{

     background: white;
     border: 5px solid #000;
    max-width: 800px;
    margin: 40px auto;
    font-size: 1.5em;

 }

 .container_form{
     border: 5px solid #000;
     background:white;
     max-width: 800px;
     margin: 50px auto;

 }
 .form{
     width: 80%;
     margin:  auto;
 }
 .button{
     margin-bottom: 15px;
 }
  /*logos*/
     .logos_inferiores {
         border-top: 2px solid #f3465c;
         background: white;
         position: absolute;
         width: 95%;
     }

 </style>