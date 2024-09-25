import { createRouter, createWebHashHistory } from "vue-router";

import RegisterForm from "../movirent/profile-management/components/register-form.component.vue";
import LoginForm from "../movirent/profile-management/components/login-form.component.vue";
import UserView from "../movirent/profile-management/components/user-view.component.vue";

import ReservationHistory from "../movirent/history-scooter/components/reservation-history.component.vue";
import ReservationDetailsDialog from "../movirent/history-scooter/components/reservation-details-dialog.component.vue";

import CreateScooter from "@/movirent/vehicule-management/pages/the-movirent-view-card.component.vue";
import NotFound from "@/movirent/shared/pages/the-response-error.component.vue";
import QuestionFrecuently from "@/movirent/shared/pages/frequently-questions.component.vue";
import PrivacyPolicy from "@/movirent/shared/pages/privacy-policy.component.vue";
import ViewCard from "@/movirent/vehicule-management/pages/the-card-scooter.component.vue";

import ScooterList from '@/movirent/resenas/components/Scooter-List.component.vue';
import ScooterDetail from '@/movirent/resenas/components/Scooter-Detail.component.vue';
import ScooterReviews from '@/movirent/resenas/components/Scooter-Reviews.component.vue';
import ScooterAddReview from '@/movirent/resenas/components/Scooter-Add-Review.component.vue';

import Main from "@/layouts/component/movirent-main.component.vue";

const routes = [
    { path: "/", component: RegisterForm },
    { path: '/register', component: RegisterForm },
    { path: '/login', component: LoginForm },
    {
        path: '/main', component: Main,

        children: [
            { path: '/profile', component: UserView },
            { path: '/ReservationHistory', component: ReservationHistory },
            { path: '/reservation/:id', component: ReservationDetailsDialog },
            { path: '/newCard', component: CreateScooter },
            { path: '/question', component: QuestionFrecuently },
            { path: '/privacy', component: PrivacyPolicy },
            { path: '/viewCard', component: ViewCard },

            { path: '/list', component: ScooterList },
            { path: '/scooter/:id', component: ScooterDetail },
            { path: '/scooter/:id/reviews', component: ScooterReviews },
            { path: '/scooter/:id/add-review', component: ScooterAddReview }

        ]
    },
    { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;