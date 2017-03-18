<template>
    <form class="form">

        <h1 v-if="ticket">Datos boleta numero {{ ticket }}</h1>
        <input placeholder="Nombre del comprador" v-model="buyer[ticket - 1].name">
        <input placeholder="Apellido del comprador" v-model="buyer[ticket - 1].last_name">
        <input placeholder="email del comprador" v-model="buyer[ticket - 1].email">
        <input placeholder="Cedula del comprador" v-model="buyer[ticket - 1].cc">
        <input placeholder="Licensia del comprador" v-model="buyer[ticket - 1].license">

    </form>
</template>

<script>
    export default{
        props: ['buyer' , 'ticket'],
    }
</script>