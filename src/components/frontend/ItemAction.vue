<template lang="html">
  <footer class="card-footer">
    <a class="card-footer-item" v-for="it in operation">
      <i class="iconfont" :class="`icon-${it.type}`"></i> {{item[it.key]}} {{it.name}}
    </a>
  </footer>
</template>

<script>
export default {
  props: {
    item: Object,
    default: () => {
      return {}
    }
  },
  data () {
    return {
      operation: [
        {
          type: 'praise',
          key: 'like',
          name: '赞'
        }, {
          type: 'comments',
          key: 'comment_count',
          name: '评论'
        }, {
          type: 'browse',
          key: 'visit',
          name: '浏览'
        }
      ]
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
  }
}
</style>
