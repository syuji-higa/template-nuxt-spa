import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      histories: []
    }),
    mutations: {
      addHistory(state, path) {
        state.histories[state.histories.length] = path
      }
    }
  })
}

export default createStore
