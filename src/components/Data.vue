<template>
    <!--
        que dejmos hoy traer dato de la boleta por id , enviar datos de la facturacion , y dejar listo el modelo de datos
        y traer datos del usuario , porque no dejar el perfil
    -->
    <section>
        <div >
            <div class="boleta">
                <p>Boleta: </p>
                <p>Precio: </p>
            </div>
            <div class="container_form">
                Datos Personales
                <form class="form" @submit.prevent="doPayment({ buyer , invoice })">
                    <md-input-container>
                        <label>Nombres</label>
                        <md-input type="text" id="names" v-model="buyer.name"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Apellidos</label>
                        <md-input type="text" id="last_name" v-model="buyer.last_name"></md-input>
                    </md-input-container>

                    <md-input-container md-inline>
                        <label>Documento de identidad</label>
                        <md-input type="text" id="cc" v-model="buyer.cc"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Carnet Estudiantil</label>
                        <md-input type="text" id="license" v-model="buyer.license"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Email</label>
                        <md-input type="text" id="email" v-model="buyer.email"></md-input>
                    </md-input-container>

                    <p>Datos de Facturacion</p>
                   
                     <md-input-container>
                        <label>Nombres</label>
                        <md-input type="text" id="name" v-model="invoice.name"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Apellidos</label>
                        <md-input type="text" id="invoice.last_name" v-model="invoice.last_name"></md-input>
                    </md-input-container>

                    <md-input-container md-inline>
                        <label>Documento de identidad</label>
                        <md-input type="text" id="cc" v-model="invoice.cc"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Carnet Estudiantil</label>
                        <md-input type="text" id="license" v-model="invoice.license"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Email</label>
                        <md-input type="text" id="email" v-model="invoice.email"></md-input>
                    </md-input-container>
                    <p>Datos de Facturacion</p>
                    <button class="button">Enviar datos</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions , mapGetters} from 'vuex'
    export default{
        methods: mapActions({
            doPayment: 'setDataPayment'
        }),
        computed: mapGetters({
            buyer: 'getBuyer',
            invoice: 'getInvoice'
        }),
        created () {
            this.$store.dispatch('getBuyer'),
            this.$store.dispatch('getInvoice')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if (vm.$store.state.tickets.added) {
                    !vm.$store.state.auth.authenticate ? next() : next('/payment')
                } else {
                    next('/')
                }
            })
        },
    }

</script>

<style  scoped>

.boleta{
   box-shadow: 0px 0px 3px grey;
   max-width: 800px;
   margin: 40px auto;
   font-size: 1.5em;
   
}

.container_form{
    box-shadow: 0px 0px 3px grey;
    background:white;
    max-width: 800px;
    margin: 50px auto;

}
.form{
    width: 80%;
    margin:  auto;
}



</style>