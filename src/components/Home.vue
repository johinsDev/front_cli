<template>
    <section>
         <div class="container">          
            <md-tabs md-centered class="tabs">
                <md-tab class="tab"  md-label="Etapa 1">
                    <div class="boletas">
                        <p>Fecha:</p>
                        <ul>
                            <li v-for="ticket in tickets.Etapa1" :class="added.id == ticket._id ? 'seleccion' : ''">
                                {{ ticket.name }} ${{ ticket.price }}
                               <md-radio v-on:change="add(ticket._id)"  id="my-test1" name="my-test-group1" md-value="i"></md-radio>
                            </li>
                        </ul>
                    </div>
                </md-tab>
                <md-tab md-label="Etapa 2">
                     <div class="boletas">
                        <ul>
                            <li v-for="ticket in tickets.Etapa2" :class="added.id == ticket._id ? 'seleccion' : ''">
                                {{ ticket.name }} ${{ ticket.price }}
                                <md-radio v-on:change="add(ticket._id)"  id="my-test1" name="my-test-group1" md-value="i"></md-radio>
                            </li>
                        </ul>
                    </div>
                </md-tab>
            </md-tabs>
            <button @click="next('/singin')" class="button">Siguiente</button>
        
        <div class="logos_inferiores">
            <img src="https://firebasestorage.googleapis.com/v0/b/clic-2017.appspot.com/o/logos-%20(1).png?alt=media&token=c824bb64-740e-4ae3-881d-79cfa20cdca4" alt="">
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

ul{
    padding: 0;
}
   .seleccion{
       border: 2px solid black;
        
   }
    .logos_inferiores{
    margin-top: 90px; 
    border-top: 2px solid #f3465c;
    position: absolute;
    width: 90%;
    }
.container {
        padding: 40px;
        background: #fff;
         margin: 40px auto;        
    }
.tabs{
       margin: auto;     
        width: 600px;
        border: 5px solid #000;
        height: 500px;  
    }
    
.boletas {

        height: 300px;
       
    }
  
    .boletas ul li {
        list-style: none;
        font-size: 1.2rem;
         padding: 40px ;
    }
    @media screen and (max-width: 900px){
        .boletas {    
        height: 420px;      
    }
     .logos_inferiores{
   
    width: 95%;
    }
    }   
</style>