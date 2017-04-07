import api from '~api'
import * as types from '../mutation_types'

const state = {
  lists: {
    data: [],
    hasNext: 0,
    page: 1,
    path: ''
  },
  item: {
    data: {},
    path: '',
    isLoad: false
  },
  trending: []
}

const actions = {
  async getArticleList ({commit, state, rootState: {global, route: { fullPath }}}, config) {
    const path = fullPath
    if (state.lists.data.length > 0 && path === state.lists.path && config.page === 1) {
      global.progress = 100
      return
    }
    const { data: { data, code } } = await api.get('frontend/article/list', {...config, cache: true})
    if (data && code === 200) {
      commit(types.FRONTEND_RECEIVE_ARTICLELIST, {
        ...config,
        ...data,
        path
      })
    }
  },
  async getArticleItem ({ commit, state, rootState: {route: { path, params: { id } }} }) {
    if (path === state.item.path) {
      global.progress = 100
      return
    }
    const { data: { data, code } } = await api.get('frontend/article/item', { id, markdown: 1, cache: true })
    if (data && code === 200) {
      commit(types.FRONTEND_RECEIVE_ARTICLEITEM, {
        data,
        path
      })
    }
  },
  async getTrending ({ commit, state }) {
    if (state.trending.length) return
    const { data: { data, code } } = await api.get('frontend/trending', { cache: true })
    if (data && code === 200) {
      commit(types.FRONTEND_RECEIVE_TRENDING, data.list)
    }
  }
}

const mutations = {
  [types.FRONTEND_RECEIVE_ARTICLELIST] (state, {list, hasNext, hasPrev, page, path}) {
    if (page === 1) {
      list = [].concat(list)
    } else {
      list = state.lists.data.concat(list)
    }
    state.lists = {
      data: list, hasNext, hasPrev, page, path
    }
  },
  [types.FRONTEND_RECEIVE_ARTICLEITEM] (state, {data, path}) {
    state.item = {
      data, path, isLoad: true
    }
  },
  [types.FRONTEND_RECEIVE_TRENDING] (state, list) {
    state.trending = list
  }
}

const getters = {
  articleList: (state) => state.lists,
  trending: (state) => state.trending,
  articleItem: (state) => state.item
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
