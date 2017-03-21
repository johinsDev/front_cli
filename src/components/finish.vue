<template>
    <section>
        <div class="container">
           <div class="row">
               
            </div>
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
   
</style>