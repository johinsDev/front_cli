<template>
    <section>   

    <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 col-md-offset-3 col-xl-6">
              <div id="accordion" role="tablist" aria-multiselectable="true">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <i class="fa fa-credit-card" aria-hidden="true"></i>
        </a>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">
          <credit-card></credit-card>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          PSE
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
   
      </div>
    </div>
  </div>
</div>
          </div>
             <div class="col col-md-2  col-xl-2 ">
                    <div class="card " style="width: 300px">

                        <div class="card-block shoping_card">
                            <div class="title">             
                            <h4 class="card-title"><i class="fa fa-shopping-cart" aria-hidden="true"></i></h4>
                            </div>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i>1 Boleta estudiante </h5>
                            </p>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i> Etapa 1 </h5>
                            </p>
                            <p class="card-text">
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i> Total a pagar </h5>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
<div class="container botones" >
<!--Botones-->
     <div class="row text-center ">  
         <div class="col-md-12">
        <button  @click="next('/')" class="btn btn-primary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Anterior</button>       
         </div>     
     </div>
        </div>
    </section>
</template>

<script>
    import creditCard from './Credit.vue'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                traslate: {
                    name: 'Nombre',
                    last_name: 'Apellido',
                    cc: 'Identificacion',
                    license: 'Carnet',
                    email: 'Correro Electronico'
                }
            }
        },
        computed: mapGetters({
            invoice: 'getInvoice',
            buyer: 'getBuyer'
        }),
        components: {
            creditCard
        },
    }

</script>
<style scoped>
    /* background: linear-gradient(to bottom, #ef167d, #ffc902);*/
</style>