import {createStore} from 'vuex'
import auth from './Modules/auth'
import modals from "./Modules/modals";

export default createStore({
  state: {
    isLoading: false,
    isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme')),
    isLocalhost: window.location.hostname !== 'localhost' && window.location.hostname !== '192.168.0.106',
    currentVersion: "0.3.6",
    checkedVersion: localStorage.getItem('checkedVersion')
  },
  mutations: {
    setIsLoading: (state, {value}) => {
      state.isLoading = value
    },
    setIsDarkTheme: (state, {value}) => {
      localStorage.setItem('isDarkTheme', value)
      state.isDarkTheme = value
    },
    setCheckedVersion: (state) => {
      state.checkedVersion = state.currentVersion
      state.modals.HeaderAlert = {}
      localStorage.setItem('checkedVersion', state.checkedVersion)
    },
    muteCheckedVersion: (state) => {
      state.modals.HeaderAlert = {}
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
  },
  actions: {},
  modules: {
    auth,
    modals
  }
})
