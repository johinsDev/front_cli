import Home from './components/Home.vue';
import Singin from './components/Singin.vue';
import Singup from './components/Singup.vue';
import Profile from './components/Profile.vue';
import Data from './components/Data.vue';
import Confirm from './components/Confirm.vue';

export const routes = [
    {path: '/', component: Home, name:'home'},
    {path: '/singin', component: Singin },
    {path: '/singup', component: Singup },
    {path: '/me', component: Profile },
    {path: '/payment', component: Data },
    {path: '/confirmation', component: Confirm },
    { path: '*', redirect: '/' }
];