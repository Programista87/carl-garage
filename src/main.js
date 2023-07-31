import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import App from './App.vue';
import Home from './components/Home.vue';
import Kontakt from './components/Kontakt.vue';
import Lakiernia from './components/Lakiernia.vue';
import Warsztat from './components/Warsztat.vue';
import Realizacje from './components/Realizacje.vue';
import Mapa from './components/Mapa.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/kontakt', component: Kontakt },
    { path: '/lakiernia', component: Lakiernia },
    { path: '/warsztat', component: Warsztat },
    { path: '/realizacje', component: Realizacje },
    { path: '/mapa', component: Mapa },
    { path: '/kontakt', component: Kontakt },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);

const googleMapsApiKey = 'AIzaSyAOTImhVT9V6fAAYYD8-5hi_WzEUWNYnJ0';

app.use(VueGoogleMaps, {
    load: {
        key: googleMapsApiKey,
    },
});

app.mount('#app');
