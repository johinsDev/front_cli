<template>
    <div>
        <h1>Profile</h1>
        <button class="button" v-if="added"  @click="next('/payment')">Siguiente</button>
    </div>
</template>

<script>
    import { mapActions , mapGetters} from 'vuex'
    export default{
        computed: mapGetters({
            added: 'getTicket'
        }),
        methods: mapActions([
            'next'
        ]),
        created() {
            this.$store.dispatch('getToken')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                !vm.$store.state.auth.authenticate ? next('/singin') : next('')
            })
        },
    }
</script>