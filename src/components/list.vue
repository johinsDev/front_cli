<template>
    <ul>
        <li v-for="ticket in tickets.Etapa1" :class="added.id == ticket._id ? 'seleccion' : ''">
            <div class="card-block">
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
</template>

<script>

</script>