<template>
    <div>
        <h1>Profile</h1>
    </div>
</template>

<script>
    export default{
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