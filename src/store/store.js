import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

const store = createStore({
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
    plugins: [
        persistedstate({
            paths: ['user', 'header', 'body']
        })
    ]
})

export default store
