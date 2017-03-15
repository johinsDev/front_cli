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

  <md-tab   md-icon="payment">
   <credit-card></credit-card>
  </md-tab>

  <md-tab md-icon="work">
    <img src="../assets/pse.jpg" alt="">
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