import {createRouter, createWebHashHistory} from "vue-router";

import ReservationHistory from "../profile-management/components/reservation-history.component.vue";
import ReservationDetailsDialog from "../profile-management/components/reservation-details-dialog.component.vue";


const routes = [
    {path: '/', component: ReservationHistory },
    { path: '/reservation/:id', component: ReservationDetailsDialog }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;