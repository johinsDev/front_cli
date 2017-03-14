<template>

    <section>
        <div class="container">
            <md-tabs md-fixed class="tabs">
                <md-tab class="tab" id="movies" md-label="Etapa 1">
                    <div class="boletas">
                        <ul>
                            <li v-for="(ticket , i) in tickets" :class="added == i ? 'seleccion' : ''">
                                {{ ticket.name }} ${{ ticket.price }}           
                               <md-radio v-on:change="add(i)"  id="my-test1" name="my-test-group1" md-value="i"></md-radio>                            
                            </li>
                            
                        </ul>
                    </div>
                </md-tab>
                <md-tab md-label="Etapa 2">
                    <h1>no disponible</h1>
                </md-tab>
            </md-tabs>
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
            'add'
        ]),
        created() {
            this.$store.dispatch('getAllTickets'),
                this.$store.dispatch('getTicket')
        },      
    }

</script>

<style scoped>
ul{
    padding: 0;
}
   .seleccion{
       background: #2ecc71;
       color: white;
   }
    .container {
        background: #ACFF97;
        padding: 40px;
        background: #fff;
         margin: 40px auto;
    
    }
     .tabs{
       margin: auto;     
        width: 600px;
    }
 
    .boletas {
        box-shadow: 0px 0px 3px grey;
        max-width: 600px;
        height: 300px;
    }
  
    .boletas ul li {
        list-style: none;
        font-size: 1.2rem;
     padding: 50px 50px 50px 50px;
    }
       
</style>