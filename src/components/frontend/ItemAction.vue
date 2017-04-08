<template lang="html">
  <footer class="card-footer">
    <a class="card-footer-item" @click="like">
      <i class="iconfont icon-praise" :class="{active: item.like_status}"></i> {{item.like}}  赞
    </a>
    <a class="card-footer-item">
      <i class="iconfont icon-comments"></i> {{item.comment_count}}  评论
    </a>
    <a class="card-footer-item">
      <i class="iconfont icon-browse"></i> {{item.visit}}  浏览
    </a>
  </footer>
</template>

<script>
import { mapActions } from 'vuex'
import cookies from 'js-cookie'
import api from '~api'
export default {
  props: {
    item: Object,
    default: () => {
      return {}
    }
  },
  methods: {
    ...mapActions({
      toggleLogin: 'global/toggleLogin',
      showMessage: 'global/showMessage',
      modifyLikeStatus: 'frontend/article/modifyLikeStatus'
    }),
    async like () {
      const user = cookies.get('user')
      if (!user) {
        this.showMessage('请先登录')
        this.toggleLogin(true)
        return
      }
      let url = 'frontend/like'
      if (this.item.like_status) url = 'frontend/unlike'
      const { data: {code, message} } = await api.get(url, { id: this.item._id })
      if (code === 200) {
        this.modifyLikeStatus({id: this.item._id, status: !this.item.like_status})
        this.showMessage({ content: message, type: 'success' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.card-footer{
  border-top-color: $border-color;
  .card-footer-item{
    color: #7a7a7a;
    border-right-color: $border-color;
    &:hover{
      color: #4a4a4a;
    }
    .iconfont.active{
      color: #ed4656;
    }
  }
}
</style>
