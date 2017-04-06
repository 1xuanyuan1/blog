import api from '~api'
import * as types from '../mutation_types'

const state = {
  lists: [],
  item: {}
}

const actions = {
  async getCategoryList ({ commit, state }, config) {
    if (state.lists.length) return
    const { data: { data, code } } = await api.get('backend/category/list', {...config, cache: true})
    if (data && code === 200) {
      commit(types.GLOBAL_GET_CATEGORYLIST, data.list)
    }
  },
  async getCategoryItem ({commit, rootState: {route: { params: { id } }}}) {
    const { data: { data, code } } = await api.get('backend/category/item', { id })
    if (data && code === 200) {
      commit(types.GLOBAL_RECEIVE_CATEGORYITEM, data)
    }
  }
}

const mutations = {
  [types.GLOBAL_GET_CATEGORYLIST] (state, payload) {
    state.lists = payload
  },
  [types.GLOBAL_RECEIVE_CATEGORYITEM] (state, payload) {
    state.item = payload
  }
}

const getters = {
  categoryList: (state) => state.lists,
  categoryItem: (state) => state.item
}

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters
}
