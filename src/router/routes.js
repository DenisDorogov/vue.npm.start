import mainModuleRoutes from "../modules/main/routes.js";
import profileModuleRoutes from "../modules/profile/routes.js";
import exampleModuleRoutes from "../modules/example/routes.js";


export default [
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    ...mainModuleRoutes,
    ...profileModuleRoutes,
    ...exampleModuleRoutes,
]