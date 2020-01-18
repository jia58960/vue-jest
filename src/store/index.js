import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputVal: 'Ethan'
  },
  mutations: {
    changeInputVal (state, payload) {
      state.inputVal = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
