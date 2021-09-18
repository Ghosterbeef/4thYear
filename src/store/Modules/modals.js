export default {
  state: {
    HeaderAlert: {
      text: '',
      action: null,
      styledLike: ''
    }
  },
  mutations: {
    setHeaderAlert: (state, value) => {
      state.HeaderAlert = value
    },
  },
  getters: {
    getHeaderAlert: (state) => {
      return state.HeaderAlert
    }
  }
}
