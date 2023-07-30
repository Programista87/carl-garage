import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from '/src/components/Home.vue';
import Kontakt from '/src/components/Kontakt.vue';
import Lakiernia from '/src/components/Lakiernia.vue';
import Warsztat from "@/components/Warsztat.vue";
// Zaimportuj inne podstrony

const routes = [
    { path: '/', component: Home },
    { path: '/kontakt', component: Kontakt },
    { path: '/lakiernia', component: Lakiernia },
    { path: '/warsztat', component: Warsztat },

    // Dodaj pozostałe podstrony
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
