import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state, paylod) {
      state.count += paylod.amount
    }
  },
  actions: {
    step1 ({ commit }, obj) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment', obj)
          resolve()
        }, 1000)
      })
    },
    step2 ({ commit }, obj) {
      setTimeout(() => {
        commit('increment', {amount: 29})
      }, 5000)
    }
  }
})
