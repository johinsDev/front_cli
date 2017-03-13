
<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <p>Log in to your account to get some great quotes.</p>
        <form action="" @submit.prevent="singin({email , password})">
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
            <button class="btn btn-primary">Access</button>
        </form>
        <p>No tienes usuario.Click <router-link  to="/singup">Aqui</router-link></p>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: mapActions({
            singin: 'login'
        }),
        created() {
            this.$store.dispatch('getToken')
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if ( vm.$store.state.tickets.added ){
                    !vm.$store.state.auth.authenticate ? next() : next('/me')
                }else{
                    next('/')
                }
            })
        },
    }
</script>