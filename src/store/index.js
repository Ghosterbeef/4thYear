import {createStore} from 'vuex'
import auth from './auth'

export default createStore({
    state: {
        isLoading: false
    },
    mutations: {
        setIsLoading: (state, {value}) => {
            state.isLoading = value
        }
    },
    getters:{
      isLoading: (state) => {
          return state.isLoading
      }
    },
    actions: {},
    modules: {
        auth
    }
})
