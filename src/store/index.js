import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
const debug = false
const store = new Vuex.Store({
  modules,
  strict: debug
})

export default store
