import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

// Importar los estilos de PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Importar vue-router
import { createRouter, createWebHistory } from 'vue-router';
import ScooterList from './application/screens/Scooter-List.component.vue';
import ScooterDetail from './application/screens/Scooter-Detail.component.vue';
import ScooterReviews from './application/screens/Scooter-Reviews.component.vue';
import ScooterAddReview from './application/screens/Scooter-Add-Review.component.vue'; // Importar el componente

// Definir las rutas
const routes = [
    { path: '/', component: ScooterList }, // Pantalla de scooters
    { path: '/scooter/:id', component: ScooterDetail }, // Pantalla de detalle del scooter
    { path: '/scooter/:id/reviews', component: ScooterReviews }, //  Pantalla de reseña del scooter
    { path: '/scooter/:id/add-review', component: ScooterAddReview } // Pantalla de dejar reseña al scooter
];

// Crear el router
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Crear la aplicación
const app = createApp(App);

// Usar PrimeVue
app.use(PrimeVue);
app.component('Button', Button);
app.component('Dropdown', Dropdown);

// Usar el router
app.use(router);

// Montar la aplicación
app.mount('#app');
