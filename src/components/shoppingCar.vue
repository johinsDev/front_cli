<template>
    <section> 
             <div class="card " style="width: 300px"  v-if="numtickets==0">

            <div class="card-block shoping_card">
                <div>
                    <div class="title">
                        <h4 class="card-title"><i class="fa fa-cart-plus" aria-hidden="true" style="font-size: 50px"></i></i>
                        </h4>
                    </div>
                    <p class="card-text">
                        <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i>No tienes compras</h5>
                    </p>
                </div>

            </div>
        </div>
    
<!-- <transition  name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
><h5 v-show="numtickets>2">{{num}}</h5>  </transition> <h5>{{addedname}} </h5>-->

            <div class="card "  style="width: 300px" v-else>

            <div class="card-block shoping_card">
                <div>
                    <div class="title">
                        <h4 class="card-title"><i class="fa fa-shopping-cart" aria-hidden="true"></i></h4>
                    </div>
                 
 
                    <p class="card-text">
                        <i class="fa fa-hand-o-right" aria-hidden="true"></i><h5>{{numtickets}}</h5> <h5>{{addedname}} </h5>
                    </p>
                    <p class="card-text">
                        <h5><i class="fa fa-hand-o-right" aria-hidden="true"></i> Etapa 1 </h5>
                    </p>
                    <p class="card-text">
                        <h5><i class="fa fa-hand-o-right" aria-hidden="true" ></i> Total a pagar {{total}}</h5>
                    </p>
                    
                </div>

            </div>
        </div>

    
        
    </section>

</template>

<script>
export default{
    props: ['numtickets', 'addedname', 'total']
}
</script>

<style>

</style>