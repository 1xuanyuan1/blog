import * as types from '../mutation_types'

import {inBrowser} from 'utils'

import Vue from 'vue'
import Message from 'components/common/Message'

const MessageComponent = Vue.extend(Message)

const openMessage = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 1500,
  container: '.messages'
}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}

const state = {
  progress: 0,
  showLoginModal: false,
  showRegisterModal: false
}

const mutations = {
  [types.GLOBAL_CHANGE_PROGRESS] (state, payload) {
    state.progress = payload
  },
  [types.GLOBAL_TOGGLE_LOGIN] (state, payload) {
    state.showLoginModal = payload
  },
  [types.GLOBAL_TOGGLE_REGISTER] (state, payload) {
    state.showRegisterModal = payload
  }
}

const actions = {
  gProgress ({commit}, payload) {
    commit(types.GLOBAL_CHANGE_PROGRESS, payload)
  },
  showMessage ({commit}, config) {
    let content, type
    if (typeof config === 'string') {
      content = config
      type = 'danger'
    } else {
      content = config.content
      type = config.type
    }
    if (inBrowser) {
      openMessage({title: content, type})
    }
  },
  toggleLogin ({commit}, payload = false) {
    commit(types.GLOBAL_TOGGLE_LOGIN, payload)
  },
  toggleRegister ({commit}, payload = false) {
    commit(types.GLOBAL_TOGGLE_REGISTER, payload)
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
