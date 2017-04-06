import * as types from '../mutation_types'

const state = {
  loading: false,
  progress: 0,
  showLoginModal: false,
  showRegisterModal: false
}

const mutations = {
  [types.GLOBAL_CHANGE_PROGRESS] (state, payload) {
    state.progress = payload
  }
}

const actions = {
  gProgress ({commit}, payload) {
    commit(types.GLOBAL_CHANGE_PROGRESS, payload)
  }
}

const getters = {
  getGlobal: (state) => state,
  progress: (state) => state.process
}

export default {
  actions,
  state,
  mutations,
  getters
}
