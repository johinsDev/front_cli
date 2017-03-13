import Home from './components/Home.vue';
import Singin from './components/Singin.vue';
import Singup from './components/Singup.vue';
import Profile from './components/Profile.vue';

export const routes = [
    {path: '/', component: Home, name:'home'},
    {path: '/singin', component: Singin },
    {path: '/singup', component: Singup },
    {path: '/me', component: Profile },
    { path: '*', redirect: '/' }
];