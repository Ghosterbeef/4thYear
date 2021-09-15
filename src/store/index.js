import {createStore} from 'vuex'
import auth from './auth'

export default createStore({
    state: {
        isLoading: false,
        isLocalhost: window.location.hostname === 'localhost'
    },
    mutations: {
        setIsLoading: (state, {value}) => {
            state.isLoading = value
        }
    },
    getters: {
        isLoading: (state) => {
            return state.isLoading
        },
        isLocalhost: (state) => {
            return state.isLocalhost
        }
    },
    actions: {},
    modules: {
        auth
    }
})
