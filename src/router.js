import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/response-error/the-response-error.component.vue"
import TheCard from "@/vehicule-management/components/the-card-scooter.component.vue"

const routes=[
    {paths: '/', component:Home},
    {path: '/Card', component: TheCard},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;