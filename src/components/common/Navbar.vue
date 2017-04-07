<template lang="html">
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="~assets/img/nav-logo.png" alt="logo">
      </router-link>
    </div>
    <div class="nav-center">
      <router-link  class="nav-item is-tab is-hidden-mobile"
          v-for="item in menus"
          :to="item.path"
          :key="item.icon"
          @click="changeMenu(item)"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </router-link>
    </div>
    <span class="nav-toggle" :class="{'is-active': isShowMenu}" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu" :class="{'is-active': isShowMenu}">
      <router-link  class="nav-item is-tab is-hidden-tablet"
          v-for="item in menus"
          :to="item.path"
          :key="item.icon"
          @click="changeMenu(item)"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </router-link>
      <a class="nav-item" v-if="username">
        <figure class="image logo" style="margin-right: 8px;">
          <img src="~assets/img/logo.png">
        </figure>
        {{username}}
      </a>
      <a class="nav-item" v-else @click="toggleLogin(true)">
        <figure class="image logo" style="margin-right: 8px;">
          <img src="~assets/img/logo.png">
        </figure>
        登录
      </a>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex'
import cookies from 'js-cookie'
export default {
  name: 'navbar',
  data () {
    return {
      isShowMenu: false,
      menus: [
        {
          name: '首页',
          icon: 'index',
          path: '/'
        }, {
          name: '热门',
          icon: 'trending',
          path: '/trending/visit'
        }, {
          name: '关于',
          icon: 'about',
          path: '/about'
        }
      ]
    }
  },
  computed: {
    activeMenu () {
      return this.$route.fullPath
    },
    username () {
      return cookies.get('username') || ''
    }
  },
  methods: {
    ...mapActions({
      toggleLogin: 'global/toggleLogin'
    }),
    showMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang="scss" scope>
.logo img{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>
