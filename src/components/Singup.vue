<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form action="" @submit.prevent="singup({email , password})">
            <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your username"
                        v-model="email"
                >
            </div>
            <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        v-model="password"
                >
            </div>
            <button class="btn btn-primary">Registrar</button>
        </form>
    </div>
</template>

<script>
    import {mapState, mapActions } from 'vuex';

    export default{
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: mapActions({
            singup: 'register'
        }),
        created() {
            this.$store.dispatch('getToken')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                !vm.$store.state.auth.authenticate ? next() : next('/me')
            })
        }
    }
</script>
