import {createStore} from 'vuex'
import auth from './auth'

export default createStore({
    state: {
        isLoading: false,
        isDarkTheme: false,
        isLocalhost: window.location.hostname !== 'localhost',
        currentVersion: "0.2.5",
        checkedVersion: localStorage.getItem('checkedVersion'),
        HeaderAlert: {
            message: ''
        }
    },
    mutations: {
        setIsLoading: (state, {value}) => {
            state.isLoading = value
        },
        setIsDarkTheme: (state, {value}) => {
            state.isDarkTheme = value
        },
        setHeaderAlert: (state, value) => {
            state.HeaderAlert = value
        },
        setCheckedVersion: (state) => {
            state.checkedVersion = state.currentVersion
            state.HeaderAlert = {}
            localStorage.setItem('checkedVersion', state.checkedVersion)
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
        },
        getVersion: (state) => {
            return state.currentVersion
        },
        getCheckedVersion: (state) => {
            return state.checkedVersion
        },
        getHeaderAlert: (state) => {
            return state.HeaderAlert
        }
    },
    actions: {},
    modules: {
        auth
    }
})
