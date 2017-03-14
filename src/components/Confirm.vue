<template>
    <div>
        <h1>Confirmacion de pago </h1>
        <credit-card></credit-card>
    </div>
</template>

<script>
    import creditCard from './Credit.vue'
    export default{
        components: {
            creditCard
        }
    }
</script>