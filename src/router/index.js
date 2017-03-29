import Vue from 'vue'
import Router from 'vue-router'
// import Meta from 'vue-meta'
import Hello from '~components/Hello'

Vue.use(Router)
// Vue.use(Meta)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
