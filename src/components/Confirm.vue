<template>
    <section>   

    <div class="container">
        <div class="row">
          <div class="col-md-6">
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
             <div class="col col-md-4  col-xl-4 ">
                    <div class="card" style="width: 30rem;">

                        <div class="card-block">
                            <h4 class="card-title">Tu Compra <i class="fa fa-shopping-cart" aria-hidden="true"></i></h4>
                            <p class="card-text"><h4><i class="fa fa-hand-o-right" aria-hidden="true"></i>1 Boleta estudiante  </h4></p>
                            <p class="card-text"><h4><i class="fa fa-hand-o-right" aria-hidden="true"></i> Etapa 1 </h4></p>
                             <p class="card-text"><h4><i class="fa fa-hand-o-right" aria-hidden="true"></i> Total a pagar  </h4></p>
                            

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
        /* beforeRouteEnter (to, from, next) {
                next(vm => {
                    !vm.$store.state.auth.authenticate ? next('/singin') : next('')
                })
            }*/
    }

</script>
<style scoped>
    /* background: linear-gradient(to bottom, #ef167d, #ffc902);*/
   
    .tabs {
        margin: auto;
        width: 600px;
        border: 5px solid #000;
        height: 700px;
    }
    
    .container {
        
     padding: 80px;
     box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0   rgba(0,0,0,.12);
        margin-top: 70px;
     background: white;
    }
    
    .logos_inferiores {
        margin-top: 90px;
        border-top: 2px solid #f3465c;
        position: absolute;
        width: 95%;
    }
    
    nav {
        background: black ;
       
    }
    
    .nav-tabs {
        border-bottom: 2px solid #DDD;
    }
    
    .nav-tabs > li.active > a,
    .nav-tabs > li.active > a:focus,
    .nav-tabs > li.active > a:hover {
        border-width: 0;
    }
    
    .nav-tabs > li > a {
        border: none;
        color: #666;
    }
    
    .nav-tabs > li.active > a,
    .nav-tabs > li > a:hover {
        border: none;
        color: #4285F4 !important;
        background: transparent;
    }
    
    .nav-tabs > li > a::after {
        content: "";
        background: #4285F4;
        height: 2px;
        position: absolute;
        width: 100%;
        left: 0px;
        bottom: -1px;
        transition: all 250ms ease 0s;
        transform: scale(0);
    }
    
    .nav-tabs > li.active > a::after,
    .nav-tabs > li:hover > a::after {
        transform: scale(1);
    }
    
    .tab-nav > li > a::after {
        background: #21527d none repeat scroll 0% 0%;
        color: #fff;
    }
    
    .tab-pane {
        padding: 15px 0;
    }
    
    .tab-content {
        padding: 20px
    }
    
    .card {
        background: #FFF none repeat scroll 0% 0%;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
        margin-bottom: 30px;
    }
    
    body {
        background: #EDECEC;
        padding: 50px
    }
</style>