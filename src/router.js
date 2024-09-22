import {createRouter, createWebHistory} from "vue-router";
import NewCard from "@/movirent/vehicule-management/pages/the-movirent-view-card.component.vue"
import NotFound from "@/movirent/shared/pages/the-response-error.component.vue"
import QuestionFrecuently from "@/movirent/shared/pages/frequently-questions.component.vue"
import PrivacyPolicy from "@/movirent/shared/pages/privacy-policy.component.vue"

const routes=[
    {path: '/', component: NewCard},
    {path: '/question', component: QuestionFrecuently},
    {path: '/privacy', component: PrivacyPolicy},
    {path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router