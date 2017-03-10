import Home from './components/Home.vue';
import Singin from './components/Singin.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/singin', component: Singin},
    { path: '*', redirect: '/' }
];