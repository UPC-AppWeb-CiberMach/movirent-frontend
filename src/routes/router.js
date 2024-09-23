import {createRouter, createWebHashHistory} from "vue-router";

import RegisterForm from "../movirent/profile-management/components/register-form.component.vue";
import LoginForm from "../movirent/profile-management/components/login-form.component.vue";
import UserView from "../movirent/profile-management/components/user-view.component.vue";
import Historial from "../movirent/profile-management/components/historial-test.vue";

import NewCard from "@/movirent/vehicule-management/pages/the-movirent-view-card.component.vue"
import NotFound from "@/movirent/shared/pages/the-response-error.component.vue"
import QuestionFrecuently from "@/movirent/shared/pages/frequently-questions.component.vue"
import PrivacyPolicy from "@/movirent/shared/pages/privacy-policy.component.vue"

const routes = [
    { path:"/", component: RegisterForm },  // RegisterForm
    { path: '/register', component: RegisterForm },
    { path: '/login', component: LoginForm },
    { path: '/profile', component: UserView },
    { path: '/historial', component: Historial },

    { path: '/newCard', component: NewCard},
    { path: '/question', component: QuestionFrecuently},
    { path: '/privacy', component: PrivacyPolicy},
    { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;