import Vue from 'vue'
import Router from 'vue-router'
// import Meta from 'vue-meta'
import Hello from '~components/AHello'

Vue.use(Router)
// Vue.use(Meta)
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
