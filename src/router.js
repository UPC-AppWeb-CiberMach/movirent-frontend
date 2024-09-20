import {createRouter, createWebHistory} from "vue-router";
import tieww from "@/movirent/vehicule-management/components/movirent-view.component.vue"
import NewScooter from "@/movirent/vehicule-management/components/movirent-view.component.vue"
import PrivacyPolice from "@/movirent/shared/pages/privacy-policy.component.vue"
import QuestionFrecuently from "@/movirent/shared/pages/frequently-questions.component.vue"
import Card from "@/movirent/vehicule-management/pages/the-card-scooter.component.vue"
import NotFound from "@/movirent/shared/pages/the-response-error.component.vue"

const routes=[
    {path: '/', component: Card},
    {path: '/Card', component: tieww},
    {path: '/Create', component: NewScooter},
    {path: '/Card/:id', component: Card},
    {path: '/Privacy', component: PrivacyPolice},
    {path: '/Question', component: QuestionFrecuently},
    {path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router