<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-md-8  col-xl-8 ">
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0" style="color: white">
                                    <a data-toggle="collapse" style="color: white" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Etapa 1
                                    </a>
                                    <a style="margin-left:150px"><i class="fa fa-calendar" aria-hidden="true"></i> Marzo 1 a Abril 30</a>
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
                                                    <div class="logo_boleta">

                                                        <img src="dist/imgClic.svg" alt="">
                                                    </div>
                                                    <p class="card-text">
                                                        <h3> ${{ ticket.price }}</h3>
                                                    </p>
                                                    <div v-if="ticket._id == added.id && num_tickets">
                                                        <p>Selecciona el numero de boletas que quieres agregar</p>
                                                        <button type="button" @click="plus()" class="btn btn-primary plus"><i class="fa fa-plus" aria-hidden="true"></i></button>                                                        {{ num_tickets }}
                                                        <button type="button" @click="minus()" class="btn btn-primary minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
                                                    </div>
                                                    <button type="button" @click="add(ticket._id)" class="btn btn-primary" v-show="ticket._id != added.id">Agregar</button>
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
                                <h5 class="mb-0" style="color: white">
                                    <a class="collapsed" style="color: white" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Etapa 2
                                        </a>
                                        <a style="margin-left:150px"><i class="fa fa-calendar" aria-hidden="true"></i> Mayo 1 a Junio 1 </a>
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
                                                    <div class="logo_boleta">

                                                        <img src="dist/imgClic.svg" alt="">
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
                    <shoppingcart :numtickets="num_tickets" :addedname="added.name" :total="total"></shoppingcart>
                    <buttoms :nextPage="'/payment'" style="margin: 40px" :name="'Continuar compra'"></buttoms>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import buttoms from './Buttom.vue'
    import shoppingcart from './shoppingCart.vue'
    export default {
        computed: mapGetters({
            tickets: 'allTickets',
            added: 'getTicket',
            num_tickets: 'getNumTickets',
            total: 'getTotal'
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
            buttoms: buttoms,
            shoppingcart: shoppingcart
        }
    }

</script>

