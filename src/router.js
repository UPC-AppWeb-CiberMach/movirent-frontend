import {createRouter, createWebHistory} from "vue-router";
import Card from "@/movirent/vehicule-management/pages/the-movirent-view-card.component.vue"
import NotFound from "@/movirent/shared/pages/the-response-error.component.vue"

const routes=[
    {path: '/', component: Card},
    {path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router