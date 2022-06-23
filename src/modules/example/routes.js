import ExampleView from "../../views/ExampleView.vue"

export default [
    {
        path: '/example/:number',
        name: 'example',
        component: ExampleView
    },
]