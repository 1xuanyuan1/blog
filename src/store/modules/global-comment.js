import api from '~api'
import * as types from '../mutation_types'

const state = {
  lists: {
    data: [],
    hasNext: 0,
    page: 1,
    path: ''
  }
}

const actions = {
  async getCommentList ({commit, rootState: {route: { path, params: { id } }}}, config) {
    const { data: { data, code } } = await api.get('frontend/comment/list', { ...config, id, cache: true })
    if (data && code === 200) {
      commit(types.GLOBAL_GET_COMMENTLIST, {
        ...config,
        ...data,
        path
      })
    }
  },
  insertCommentItem ({commit}, data) {
    commit(types.GLOBAL_INSERT_COMMENTITEM, data)
  }
}

const mutations = {
  [types.GLOBAL_GET_COMMENTLIST] (state, {list, hasNext, hasPrev, page, path}) {
    if (page === 1) {
      list = [].concat(list)
    } else {
      list = state.lists.data.concat(list)
    }
    state.lists = {
      data: list, hasNext, hasPrev, page, path
    }
  },
  [types.GLOBAL_INSERT_COMMENTITEM] (state, data) {
    state.lists.data = [data].concat(state.lists.data)
  }
}

const getters = {
  commentList: (state) => state.lists
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
