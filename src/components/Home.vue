<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-md-6  col-xl-6 ">
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Etapa 1
                        </a>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <ul>
                                    <li v-for="ticket in tickets.Etapa1" :class="added.id == ticket._id ? 'seleccion' : ''">
                                        <div class="card-block">
                                            <!--Boleta Estudiante-->
                                            <div class="card">
                                                <div class="card-block">
                                                    <h4 class="card-title">{{ ticket.name }}</h4>
                                                    <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                                    <p class="card-text">
                                                        <h3> ${{ ticket.price }}</h3>
                                                    </p>
                                                    <button type="button" @click="plus()" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>                                                    {{ num_tickets }}
                                                    <button type="button" @click="minus()" class="btn btn-danger"><i class="fa fa-minus" aria-hidden="true"></i></button>
                                                    <button type="button" @click="add(ticket._id)" class="btn btn-warning">Agregar</button>
                                                    
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
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Etapa 2
                        </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="card-block">
                                    <!--Boleta Estudiante-->
                                    <ul v-for="ticket in tickets.Etapa2">
                                        <div class="card">
                                            <div class="card-block">
                                                <h4 class="card-title">Boleta Estudiante</h4>
                                                <h6 class="card-subtitle mb-2 text-muted">Clic 2017</h6>
                                                <p class="card-text">
                                                    <h3>$10.000</h3>
                                                </p>
                                                <button type="button" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                <button type="button" class="btn btn-danger"><i class="fa fa-minus" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col col-md-4  col-xl-4 ">
                    <div class="card" style="width: 30rem;">

                        <div class="card-block">
                            <h4 class="card-title">Tu Compra <i class="fa fa-shopping-cart" aria-hidden="true"></i></h4>
                            <p class="card-text">
                                <h4><i class="fa fa-hand-o-right" aria-hidden="true"></i>1 Boleta estudiante </h4>
                            </p>
                            <p class="card-text">
                                <h4><i class="fa fa-hand-o-right" aria-hidden="true"></i> Etapa 1 </h4>
                            </p>
                            <p class="card-text">
                                <h4><i class="fa fa-hand-o-right" aria-hidden="true"></i> Total a pagar </h4>
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <!--Botones-->
            <div class="row text-center">
                <div class="col-md-12">
                    <button @click="next('/payment')" class="btn btn-primary">Siguiente <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
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
    }

</script>

<style scoped>
    .container {
        padding: 80px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        margin-top: 70px;
        background: white;
    }
    
    ul,
    li {
        padding: 0;
        margin: 0;
    }
</style>