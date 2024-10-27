import { createRouter, createWebHashHistory } from "vue-router";

import RegisterForm from "../movirent/profile-management/components/register-form.component.vue";
import LoginForm from "../movirent/profile-management/components/login-form.component.vue";
import UserView from "../movirent/profile-management/components/user-view.component.vue";

import ReservationHistory from "../movirent/history-scooter/components/reservation-history.component.vue";
import ReservationDetailsDialog from "../movirent/history-scooter/components/reservation-details-dialog.component.vue";

import NotFound from "@/movirent/shared/pages/the-response-error.component.vue";
import QuestionFrecuently from "@/movirent/shared/pages/frequently-questions.component.vue";
import PrivacyPolicy from "@/movirent/shared/pages/privacy-policy.component.vue";

import Detail from "@//movirent/scooter-reviews/components/Scooter-Detail.component.vue";

import ScooterDetails from '@/movirent/vehicule-management/components/Scooter-Details.component.vue';
import ScooterReviews from '@/movirent/scooter-reviews/components/Scooter-Reviews.component.vue';
import ScooterAddReview from '@/movirent/scooter-reviews/components/Scooter-Add-Review.component.vue';
import ScooterList from '@/movirent/scooter-reviews/components/Scooter-List.component.vue';

import Main from "@/layouts/component/movirent-main.component.vue";
import CreateScooters from "@/movirent/vehicule-management/components/create-scooters.component.vue";
import ViewScooters from "@/movirent/vehicule-management/components/view-scooters.component.vue";
import SuscriptionOptions from "@/movirent/suscription-management/components/suscription-options.vue";
import MySuscription from "@/movirent/suscription-management/components/my-suscription.vue";
import PaymentView from "@/movirent/payment-management/components/payment-view.vue";
import ScooterPayment from "@/movirent/payment-management/components/payment-scooter.vue"

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
            { path: '/question', component: QuestionFrecuently },
            { path: '/privacy', component: PrivacyPolicy },
            { path: '/Detail/:id', component: Detail },

            { path: '/CreateScooter', component: CreateScooters },

            { path: '/ScooterList', component: ViewScooters },
            { path: '/scooter/:id', component: ScooterDetails },
            { path: '/SearchScooter', component: ScooterList},
            { path: '/scooter/:id/reviews', component: ScooterReviews },
            { path: '/scooter/:id/add-review', component: ScooterAddReview },

            { path: '/suscriptions', component: SuscriptionOptions },
            { path: '/MySuscription', component: MySuscription},

            { path: '/payment', component: PaymentView},
            { path: '/ScooterPayment', component: ScooterPayment}

        ]
    },
    { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;