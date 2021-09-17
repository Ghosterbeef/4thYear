import {createStore} from 'vuex'
import auth from './auth'

export default createStore({
    state: {
        isLoading: false,
        isDarkTheme: false,
        isLocalhost: window.location.hostname === 'localhost'
    },
    mutations: {
        setIsLoading: (state, {value}) => {
            state.isLoading = value
        },
        setIsDarkTheme: (state, {value}) => {
            state.isDarkTheme = value
        }
    },
    getters: {
        isLoading: (state) => {
            return state.isLoading
        },
        isLocalhost: (state) => {
            return state.isLocalhost
        },
        isDarkTheme: (state) => {
            return state.isDarkTheme
        }
    },
    actions: {},
    modules: {
        auth
    }
})
