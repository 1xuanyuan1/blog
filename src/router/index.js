import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// import cookies from 'js-cookie'

// import {inBrowser} from '../utils'
import Index from 'views/frontend'

Vue.use(VueRouter)
Vue.use(Meta)
const lazyLoading = (name, index = false) => (resolve) => require([`views/${name}${index ? '/index' : ''}.vue`], resolve)

const scrollBehavior = to => {
  const position = {}
  if (to.hash) {
    position.selector = to.hash
  }
  if (to.matched.some(asm => asm.meta.scrollToTop)) {
    position.x = 0
    position.y = 0
  }
  return position
}

// const guardRoute = (to, from, next) => {
//   var token = cookies.get('user') || !inBrowser
//   if (!token) {
//     next('/')
//   } else {
//     next()
//   }
// }

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  scrollBehavior,
  routes: [
    { name: 'index', path: '/', component: Index },
    { name: 'trending', path: '/trending/:by', component: Index },
    { name: 'category', path: '/category/:id', component: Index },
    { name: 'about', path: '/about', component: lazyLoading('frontend/about'), meta: { scrollToTop: true } },
    { path: '*', redirect: '/' }
  ]
})

export default router
