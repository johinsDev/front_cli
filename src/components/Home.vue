<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-md-8  col-xl-8 ">
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" style="color: white"  data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Etapa 1
                        </a>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <ul>
                                    <li v-for="ticket in tickets.Etapa1" :class="added.id == ticket._id ? 'seleccion' : ''">
                                        <div class="card-block">
                                            <!--Boleta Estudiante-->
                                            <div class="card boleta">
                                                <div class="card-block">
                                                    <h4 class="card-title">{{ ticket.name }}</h4>
                                                    <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                                    <h6 class="card-subtitle mb-2 text-muted">Etapa 1</h6>
                                                    <div class="logo_boleta" >
                                                
                                                 <img src="../../assets/imgClic.svg" alt="">
                                                </div>
                                                    <p class="card-text">
                                                        <h3> ${{ ticket.price }}</h3>
                                                    </p>
                                                    <div v-if="ticket._id == added.id ">
                                                    <p>Selecciona el numero de boletas que quieres agregar</p>
                                                    <button type="button" @click="plus()" class="btn btn-primary plus"><i class="fa fa-plus" aria-hidden="true"></i></button>                                                    {{ num_tickets }}
                                                    <button type="button" @click="minus()" class="btn btn-primary minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
                                                    </div>
                                                    <button type="button" @click="add(ticket._id)" class="btn btn-primary ">Agregar</button>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <!--Segunda Etapa-->
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo">
                                <h5 class="mb-0">
                                    <a class="collapsed" style="color: white"  data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Etapa 2
                        </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                  <ul>
                                    <li v-for="ticket in tickets.Etapa2" :class="added.id == ticket._id ? 'seleccion' : ''">
                                        <div class="card-block">
                                            <!--Boleta Estudiante-->
                                            <div class="card boleta">
                                                <div class="card-block">
                                                    <h4 class="card-title">{{ ticket.name }}</h4>
                                                    <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                                    <h6 class="card-subtitle mb-2 text-muted">Etapa 2</h6>
                                                    <div class="logo_boleta" >
                                                
                                                 <img src="../../assets/imgClic.svg" alt="">
                                                </div>
                                                    <p class="card-text">
                                                        <h3> ${{ ticket.price }}</h3>
                                                    </p>
                                                   <p>No Disponible </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                           
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
                                <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i>{{num_tickets}} {{added.name}} </h5>
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

  <buttoms :nextPage="'/payment'"></buttoms>
         <footer class="footer-img">         
            <div class="row text-center">
                <div class="col-md-12">
                  <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                 alt="">
                </div>
            </div>
        </footer>
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import buttoms from './Buttom.vue' 
    export default {
        computed: mapGetters({
            tickets: 'allTickets',
            added: 'getTicket',
            num_tickets: 'getNumTickets'
        }),
        methods: mapActions([
            'add',
            'next',
            'plus',
            'minus'
        ]),
        created() {
            this.$store.dispatch('getAllTickets'),
            this.$store.dispatch('getTicket')
        },  
        components: {
            buttoms: buttoms
        }
    }

</script>

<style scoped>
/*Estilos Boletas pasar a sass*/
    .card.boleta{
        background: white;
         margin-top: 20px; 
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0   rgba(0,0,0,.12);
         
    }
   .card-title{
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
.logo_boleta{
    position: absolute;
    right: 0;
    width: 130px;   
    top: 0;
  
}
</style>