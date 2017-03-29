// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

app.$mount('#app')
