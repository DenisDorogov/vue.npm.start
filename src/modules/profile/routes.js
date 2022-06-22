import ProfileView from "../../views/ProfileView.vue"

export default [
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        // beforeEnter: (to, from, next) => {
        //     if (!store.state.userIsLogged) next({ path: '/', replace: true })
        //     else next()
    },
]