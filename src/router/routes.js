import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AdvicesView from '../views/AdvicesView.vue';

export default [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    
    {
        path: '/advices',
        name: 'advices',
        component: AdvicesView
    },
]