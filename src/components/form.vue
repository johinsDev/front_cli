<template>
    
<form>
<div class="form-group">
    <label for="name">Nombres</label>
    <input type="text" class="form-control" placeholder="Nombres" v-model="buyer[numTicket - 1].name">
</div>
<div class="form-group">
    <label for="lastname">Apellidos</label>
    <input type="text" class="form-control"  placeholder="Apellidos"  v-model="buyer[numTicket - 1].last_name">
</div>
<div class="form-group">
    <label for="document">Email</label>
    <input type="text" class="form-control"  placeholder="email" v-model="buyer[numTicket - 1].email">
</div>
<div class="form-group">
    <label for="email">Documento de identidad</label>
    <input type="email" class="form-control"  placeholder="Documento de identidad" v-model="buyer[numTicket - 1].cc">
</div>


  <div class="form-group" v-show="ticket.category == 'estudiantes'">
    <p class="help-block">Carné Estudiantil</p>
    <label for="exampleInputFile">File input</label>
    <input class="btn bnt-primary" type="file"  id="exampleInputFile">
   
  </div>


</form>
</template>

<script>
    export default {
        props: ['buyer', 'numTicket', 'ticket'],
    }

</script>
