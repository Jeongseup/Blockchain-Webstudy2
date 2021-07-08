import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

export default createStore({
    state() {
        return {
            user: {},
            header: [],
            body: []
        }
    },
    mutations: {
        user(state, data) {
            state.user = data
        },
        header(state, data) {
            state.header = data
        },
        body(state, data) {
            state.body = data
        }
    },
    actions: {},
    modules: {},
    plugins: [
        persistedstate({
            paths: ['user', 'header', 'body']
        })
    ]
})
