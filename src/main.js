import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue';
import store from './store'
import VueMaterial from 'vue-material'

Vue.use(VueRouter);

const router = new VueRouter({
        routes
});


Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'black',
  accent: 'black',
  warn: 'red',
  background: 'white'
})
new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
});

export default router;