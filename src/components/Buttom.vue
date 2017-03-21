<template>
    <div class="container botones">
        <!--Botones-->
        <div class="row text-center">
            <div class="col-md-6" v-show="previusPage">
                <button @click="previus(previusPage)" class="btn btn-primary"><i class="fa fa-arrow-left" aria-hidden="true"></i> Anterior</button>
            </div>
            <div class="col-md-6"  v-show="nextPage">
                <button @click="next(nextPage)" class="btn btn-primary">Siguiente <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['nextPage' , 'previusPage'],
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