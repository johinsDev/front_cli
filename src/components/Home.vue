<template>
    <ul>
        <li v-for="(ticket , i) in tickets" :class="added == i ? 'red' : ''">
            {{ ticket.name }} - {{ ticket.price }}
            <button @click="add(i)" v-show="added != i">Adquirir Esta boleta</button>
        </li>
        <button v-if="added" @click="next('/singin')">Siguiente</button>
    </ul>
</template>
<style>
    .red{
        color: red;
    }
</style>
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
        created () {
            this.$store.dispatch('getAllTickets'),
            this.$store.dispatch('getTicket')
        }
    }
</script>