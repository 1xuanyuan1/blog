<template lang="html">
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="~assets/img/nav-logo.png" alt="logo">
      </a>
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
      <a class="nav-item is-tab">
        <figure class="image logo" style="margin-right: 8px;">
          <img src="~assets/img/logo.png">
        </figure>
        Log out
      </a>
    </div>
  </div>
</nav>
</template>

<script>
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
    }
  },
  methods: {
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
