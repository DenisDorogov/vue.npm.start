import ExampleView from "../../views/ExampleView.vue"

export default [
    {
        path: '/example/:number',
        name: 'example',
        component: ExampleView,
        // beforeEnter: (to, from, next) => {
        //     if (!store.state.userIsLogged) next({ path: '/', replace: true })
        //     else next()
    },
]