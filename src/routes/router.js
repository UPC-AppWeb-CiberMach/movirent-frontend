import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";

const routes = [
    { path:"/", component: () => import("../profile-management/components/register-form.component.vue")},
    { path: '/register', component: () => import('../profile-management/components/register-form.component.vue') },
    { path: '/login', component: () => import('../profile-management/components/login-form.component.vue') },
    { path: '/profile', component: () => import('../profile-management/components/user-view.component.vue') },
    {path: '/history', component: () => import('../profile-management/components/reservation-history.component.vue')},
    { path: '/reservation/:id', component: () => import('../profile-management/components/reservation-details-dialog.component.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;