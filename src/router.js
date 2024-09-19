import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/response-error/the-response-error.component.vue"
import Vieww from "@/vehicule-management/components/movirent-view.component.vue"
import Header from "@/layouts/component/the-header.component.vue"
import NewScooter from "@/vehicule-management/components/movirent-view.component.vue"

const routes=[
    {path: '/', component: Header},
    {path: '/Card', component: Vieww},
    {path: '/Create', component: NewScooter},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router