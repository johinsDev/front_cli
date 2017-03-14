<template>
    <ul>
        <li v-for="(ticket , i) in tickets" :class="added == i ? 'red' : ''">
            {{ ticket.name }} - {{ ticket.price }}
            <button @click="add(i)" v-show="added != i">Adquirir Esta boleta</button>
        </li>
        <p>{{ added }}</p>
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
            'add'
        ]),
        created () {
            this.$store.dispatch('getAllTickets'),
            this.$store.dispatch('getTicket')
        }
    }
</script>