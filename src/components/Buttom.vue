<template>
    <section>

  <div class="container botones" v-if="previusPage">
        <!--Botones-->
        <div class="row text-center" >
            <div class="col-md-12">
                <button @click="previus(previusPage)" class="btn btn-primary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Anterior</button>
            </div>
           
        </div>

    </div>

         <div  v-else="nextPage">
             
            <div class="col-md-12">
                <button @click="next(nextPage)" class="btn btn-primary">{{name}}<i :class="icon" aria-hidden="true"></i></button>
            </div>
         
        </div>
    </section>
  
</template>

<script>
    export default{
        props: ['nextPage' , 'previusPage', 'name', 'icon'],
        methods: {
            next(path) {
                this.$router.push({ path: path})
            },
            previus(path){
                this.$router.push({ path: path})
            }
        }
    }
</script>