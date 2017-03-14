<template>
    <!--
        que dejmos hoy traer dato de la boleta por id , enviar datos de la facturacion , y dejar listo el modelo de datos
        y traer datos del usuario , porque no dejar el perfil
    -->
    <section>
        <div >
            <div class="boleta">

                <p>Datos seleccionados para la compra</p>
                <p>Boleta: {{ticket.name}} </p>
                <p>Precio: {{ticket.price}}</p>
                <p>Etapa: 1</p>
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

                    <md-input-container v-if="ticket.id == 4 ">
                        <label>Carnet Estudiantil</label>
                        <md-input type="text" id="license" v-model="invoice.license"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Email</label>
                        <md-input type="text" id="email" v-model="invoice.email"></md-input>
                    </md-input-container>
                    
                    <button class="button">Ir a pagar</button>
                </form>

            </div>
        </div>
       
         <div class="logos_inferiores">
            <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4"
                alt="">
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
            invoice: 'getInvoice',
            ticket: 'getTicket'
        }),
        created () {
            this.$store.dispatch('getBuyer'),
            this.$store.dispatch('getInvoice'),
            this.$store.dispatch('getTicket')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                !vm.$store.state.auth.authenticate ? next('/singin') : next('')
            })
        },
    }

</script>

<style  scoped>

.boleta{
    
    background: white;
    border: 5px solid #000;
   max-width: 800px;
   margin: 40px auto;
   font-size: 1.5em;
   
}

.container_form{
    border: 5px solid #000;
    background:white;
    max-width: 800px;
    margin: 50px auto;

}
.form{
    width: 80%;
    margin:  auto;
}
.button{
    margin-bottom: 15px; 
}
 /*logos*/
    .logos_inferiores {
        border-top: 2px solid #f3465c;
        background: white;
        position: absolute;
        width: 95%;
    }

</style>