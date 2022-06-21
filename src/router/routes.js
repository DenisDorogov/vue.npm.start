import MainView from '../views/MainView.vue';
import ExampleModule from '../views/ExampleView.vue';

export default [{
        path: '/',
        name: 'main',
        component: MainView
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
        path: '/example',
        name: 'example',
        component: ExampleModule
    },
]