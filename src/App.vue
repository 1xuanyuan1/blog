<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~animate.css';
@import '~bulma';
body{
  background: #ebf0f0;
}
.iconfont{
  margin-right: 8px;
}
</style>
