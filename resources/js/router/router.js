import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth/auth.store';
import { Loading } from 'quasar';
// 1. Define route components.
// These can be imported from other files
const LandingPage = () =>
    import ('../components/landing/LandingPage.vue');

const Login = () =>
    import ('../components/auth/Login.vue');

const LoggedPage = () =>
    import ('../components/logged/LoggedPage.vue');
const NotFound = () =>
    import ('../components/logged/NotFound.vue');

const Dashboard = () =>
    import ('../components/logged/page/Dashboard.vue');

const LANDING_ROUTES = [{
    name: 'Landing',
    path: "/",
    component: LandingPage,
}, ];

const AUTH_ROUTES = [{
    name: 'Login',
    path: "/login",
    meta: { guest: true },
    component: Login,
}, ];

const NOT_FOUND = [{
        path: "/app/404",
        name: "NotFound",
        components: {
            default: LoggedPage,
            loggedview: NotFound
        }
    },
    {
        path: '/app/:pathMatch(.*)*',
        redirect: '/app/404'
    }
];

const NOT_FOUND_LANDING = [{
    path: '/:pathMatch(.*)*',
    redirect: '/'
}];

const LOGGED_ROUTES = [{
    path: "/app",
    name: 'Logged',
    component: LoggedPage,
    meta: { requiresAuth: true },
    children: [{
            path: '/app',
            name: 'App',
            redirect: '/app/dashboard'
        },
        {
            path: "/app/dashboard",
            name: "Dashboard",
            icon: "dashboard",
            components: {
                default: LoggedPage,
                loggedview: Dashboard
            }
        },
        ...NOT_FOUND
    ]
}];

const routes = [
    ...LANDING_ROUTES,
    ...AUTH_ROUTES,
    ...LOGGED_ROUTES,
    ...NOT_FOUND_LANDING
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

function loggedIn() {
    return localStorage.getItem("Gubzwp5y9SC8oL9Q0aAi");
}

router.beforeEach((to, from, next) => {
    Loading.show();

    const auth = useAuthStore();
    let user = auth.user;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn()) {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }
            })
        } else {
            if (!user) {
                auth.getUser().then(() => {
                    user = auth.user;
                    if (to.matched.some(record => record.meta.adminOnly) && user.role.val == 73) {
                        router.push('/app/dashboard');
                    } else {
                        next();
                    }
                })
            } else {
                if (to.matched.some(record => record.meta.adminOnly) && user.role.val == 73) {
                    router.push('/app/dashboard');
                } else {
                    next();
                }
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            router.push('/app/dashboard');
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach(() => {
    // hide loading indicator
    Loading.hide();
});

export default router;