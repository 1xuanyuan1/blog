<template lang="html">
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="~assets/img/nav-logo.png" alt="logo">
      </a>
    </div>
    <div class="nav-center">
      <a  class="nav-item is-tab is-hidden-mobile"
          v-for="item in menus"
          @click="changeMenu(item)"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </a>
    </div>
    <span class="nav-toggle" :class="{'is-active': isShowMenu}" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu" :class="{'is-active': isShowMenu}">
      <a  class="nav-item is-tab is-hidden-tablet"
          v-for="item in menus"
          @click="changeMenu(item)"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </a>
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
  data () {
    return {
      isShowMenu: false,
      activeMenu: 'index',
      menus: [
        {
          name: '首页',
          icon: 'index',
          path: 'index'
        }, {
          name: '热门',
          icon: 'trending',
          path: 'trending'
        }, {
          name: '关于',
          icon: 'about',
          path: 'about'
        }
      ]
    }
  },
  methods: {
    showMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    changeMenu (item) {
      this.activeMenu = item.path
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
