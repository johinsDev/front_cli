<template>
    <div>
        <div class="form-group">
            <label for="names">Nombre Titular de la cuenta</label>
            <input type="text" class="form-control" id="names" placeholder="Nombre" v-model="user.name">
        </div>
        <div class="form-group">
            <label for="cc">Numero de Documento Titular</label>
            <input type="text" class="form-control"  placeholder="Cedula titular" id="cc" v-model="user.identificationNumber">
        </div>
        <div class="form-group">
            <label for="email">Correo electronico</label>
            <input type="email" class="form-control" id="email" placeholder="email"  v-model="user.email">
        </div>
    </div>
</template>
<script>
    export default{
        props:['user']
    }
</script>