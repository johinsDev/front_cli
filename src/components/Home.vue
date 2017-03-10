<template>
    <ul>
        <li v-for="(ticket , i) in tickets">
            {{ ticket.name }} - {{ ticket.price }}
            <button @click="add(i)">Adquirir Esta boleta</button>
        </li>
        <p>{{ added | json }}</p>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {

        computed: mapGetters({
            tickets: 'allTickets',
            added: 'allAdded'
        }),
        methods: mapActions([
            'add'
        ]),
        created () {
            this.$store.dispatch('getAllTickets')
        }
    }
</script>