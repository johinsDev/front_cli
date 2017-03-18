<template>
    
<form>
<div class="form-group">
    <label for="name">Nombres</label>
    <input type="text" class="form-control" placeholder="Nombres" v-model="buyer[ticket - 1].name">
</div>
<div class="form-group">
    <label for="lastname">Apellidos</label>
    <input type="text" class="form-control"  placeholder="Apellidos"  v-model="buyer[ticket - 1].last_name">
</div>
<div class="form-group">
    <label for="document">Documento de identidad</label>
    <input type="text" class="form-control"  placeholder="email" v-model="buyer[ticket - 1].email">
</div>
<div class="form-group">
    <label for="email">Correo Electronico</label>
    <input type="email" class="form-control"  placeholder="Documento de identidad" v-model="buyer[ticket - 1].cc">
</div>
<div class="form-group">
    <label for="">Carnet Estudiantil</label>
    <input type="text" class="form-control"  placeholder="Carnet Estudiantil" v-model="buyer[ticket - 1].license">
</div>
</form>
</template>

<script>
    export default {
        props: ['buyer', 'ticket'],
    }

</script>