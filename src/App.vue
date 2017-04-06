<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide-fade">
      <router-view :key="key" class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import NProgress from 'nprogress'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({
      global: 'global/getGlobal'
    }),
    key() {
      return this.$route.path.replace(/\//g, '_')
    }
  },
  watch: {
    'global.progress' (val) {
      if (val === 0) {
        NProgress.set(0)
        NProgress.start()
      } else if (val === 100) {
        NProgress.done()
      } else {
        NProgress.set(val/100)
        NProgress.start()
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';
@import '~scss/base.scss';
html,body{
  background: #ebf0f0;
}
.iconfont{
  margin-right: 8px;
}

.card {
  border-radius: $border-radius;
  margin-top: $base-padding;
}

#nprogress{
  .bar {
    background: $base-color !important;
  }
  .spinner-icon {
    border-top-color: $base-color !important;
    border-left-color: $base-color !important;
  }
}

[class*='-enter-active'] {
  transition: all .8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
[class*='-leave-active'] {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.h-fade-enter, .h-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
