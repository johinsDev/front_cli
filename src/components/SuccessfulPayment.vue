<template>
    <section>

  <div class="row justify-content-md-center" v-if="checkoutStatus == 'successful'">
               <div class="col-md-12">
                    <h2 style="text-align: center"><i class="fa fa-smile-o" aria-hidden="true"></i> Pago Exitoso</h2>
                    <br/>
                    <h4><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Datos de compra</h4>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Codigo: {{ order.id }}</h3>
                   <h3><i class="fa fa-circle" aria-hidden="true"></i> Total valor pagado: {{ order.total }}. Cantidad {{ order.quantity }}.</h3>
                   
               </div>
                 <div class="col col-md-8  col-xl-6 ">
                        <div class="card boleta" v-for="ticket in tickets">
                            <div class="card-block">
                                <h4 class="card-title" v-if="ticket.category == 'estudiantes'">Boleta Estudiante</h4>
                                <h4 class="card-title" v-else>Boleta Profesional</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                   <div class="logo_boleta">
                                       <img src="../../assets/imgClic.svg" alt="">
                                   </div>
                                <p class="card-text">Codigo: {{ ticket.id }}</p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.name }} {{ ticket.assist.last_name }}</p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.cc }} </p>
                                <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.email }} </p>
                            </div>
                        </div>
                 </div>
               <router-link class="link" to="/"><h3>Regresar al inicio</h3></router-link>
            </div>
    </section>

</template>
<script>
       import buttoms from './Buttom.vue'
    export default {
        props: ['state', 'checkoutStatus', 'urls', 'order', 'tickets'],
      components: {
            buttoms: buttoms
        }
    }

</script>


<style>
    

</style>