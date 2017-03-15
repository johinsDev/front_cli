<template>
    <section>
    <div class="container">  
        <md-table v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head>Datos de facturacion</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in invoice" :key="index">
      <md-table-cell>{{ traslate[index] }}</md-table-cell>
      <md-table-cell md-numeric>{{ row }}</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
<!--slider con los modos de pago-->
<p>Modo de pago</p>
    <md-tabs md-centered class="tabs">

  <md-tab   md-label="Tarjeta Credito">
   <credit-card></credit-card>
  </md-tab>

  <md-tab md-label="PSE(Pago sucursal virtual)">
    <img src="../../assets/pse.jpg" alt="">
  </md-tab>
        <md-tab md-label="Efectivo">
            <img src="data:image/jpeg;base64,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" alt="">
        </md-tab>
</md-tabs>
</div>
<div class="logos_inferiores">
            <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                alt="">
        </div>
    </section>
</template>

<script>
    import creditCard from './Credit.vue'
    import {mapGetters} from 'vuex'

    export default{
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
           invoice: 'getInvoice'
        }),
        components: {
            creditCard
        },
         beforeRouteEnter (to, from, next) {
                next(vm => {
                    !vm.$store.state.auth.authenticate ? next('/singin') : next('')
                })
            }
    }
</script>
<style scoped>
/* background: linear-gradient(to bottom, #ef167d, #ffc902);*/
    .tabs{
       margin: auto;     
        width: 600px;
        border: 5px solid #000;
        height: 700px;
       
    }
    .container {        
        padding: 40px;
        background: #fff;
         margin: 40px auto;
         max-width: 800px;        
    }
     .logos_inferiores{
        margin-top: 90px; 
    border-top: 2px solid #f3465c;
    position: absolute;
    width: 95%;
    }
    nav{
       background: black !important;
    }
</style>