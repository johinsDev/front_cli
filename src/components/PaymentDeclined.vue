<template>
    <section>
        <div class="row justify-content-md-center" v-show="checkoutStatus != 'successful'">
            <div class="col-md-12">
                <h2 style="text-align: center">Pago {{ state }}</h2>
                <br/>
                <div v-show="checkoutStatus != 'failed'">
                     <h4> Datos de compra</h4>
                <h3><i class="fa fa-check" aria-hidden="true"></i> Numero de orden: {{ order.id }}</h3>
                <h3><i class="fa fa-check" aria-hidden="true"></i> Total valor pendiente: ${{ order.total }}</h3>
                <h3><i class="fa fa-check" aria-hidden="true"></i>  Cantidad de boletas {{ order.quantity
                    }}</h3>
                </div>
            </div>
            <div class="col-md-12" v-show="checkoutStatus == 'failed'">
                <h2 style="text-align: center">Por favor intenta nuevamente o comunicate con tu sucursal bancaria</h2>
                <router-link class="link" to="/confirmation" style="text-align: center">
                    <h3>Intentar nuevamente</h3>
                </router-link>
            </div>
            <div class="col-md-12" v-show="checkoutStatus == 'pending'">
                <h2 style="text-align: center">Las boletas se activaran al momento del pago <a :href="urls.url" target="_blank">ir a url de pago</a></h2>
                <a :href="urls.file"><i class="fa fa-download" aria-hidden="true"></i> Descargar tiquete de pago</a>
            </div>
            <div class="col col-md-9  col-xl-8 ">
                  <div class="card boleta" v-for="ticket in tickets">
                    <div class="card-block">
                        <h4 class="card-title" v-if="ticket.category == 'estudiantes'">Boleta Estudiante</h4>
                        <h4 class="card-title" v-else>Boleta Profesional</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                        <div class="logo_boleta">
                            <img src="dist/imgClic.svg" alt="">
                        </div>
                        <p class="card-text">Codigo: {{ ticket.id }}</p>
                        <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.name }} {{ ticket.assist.last_name
                            }}</p>
                        <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.cc }} </p>
                        <p class="card-text"><i class="fa fa-check" aria-hidden="true"></i>{{ ticket.assist.email }} </p>
                    </div>
                </div>
            </div>
             
        </div>
         <buttoms :nextPage="'/'" :icon="'fa fa-home'" style="margin: 40px auto 40px 400px" :name="'Ir al inicio'"></buttoms>
          
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
   /*Estilos Boletas pasar a sass*/
    
    .card.boleta {
        background: white;
        margin-top: 20px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    }
    .card-title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }    
    .card-subtitle {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    /*logo boleta*/
    
    .logo_boleta {
        position: absolute;
        right: 0;
        width: 130px;
        top: 0;
    }
</style>