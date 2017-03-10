<template>
    <ul>
        <li v-for="ticket in tickets">
            {{ ticket.name }} - {{ ticket.price }}
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            tickets: 'allTickets'
        }),
        created () {
            this.$store.dispatch('getAllTickets')
        }
    }
</script>