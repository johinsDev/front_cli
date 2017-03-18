<template>
    <section>
        <div class="container">
           <div class="row">
                <div class="col col-md-6  col-xl-6 ">
                
            </div>
                
            </div>
        </div>

       
        <div class="container botones">
            <!--Botones-->
            <div class="row text-center">
                <div class="col-md-12">
                    <button @click="next('/payment')" class="btn btn-primary">Volver al inicio <i class="fa fa-home" aria-hidden="true"></i></button>
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
            added: 'getTicket'
        }),
        methods: mapActions([
            'add',
            'next'
        ]),
        created() {
            this.$store.dispatch('getAllTickets'),
                this.$store.dispatch('getTicket')
        },
    }

</script>

<style scoped>
    .container {
        margin-top: 100px;
    }
    .container.botones{
        background: black;
    }
    .row {
        background: grey;
    }
</style>