<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        来着分类<strong>Vue</strong>
      </p>
      <p class="card-header-time">
        2017-03-14 17:34:09
      </p>
    </header>
    <a class="card-title">
      Vue SSR, 在服务端请求数据时怎么带 cookies?
    </a>
    <div class="card-content">
      <div class="content">
        cookies 都是存在浏览器端, 而 ssr 时, 是在服务器请求的接口, 默认情况肯定带不了浏览器的 cookies, 然而一些登录后的页面数据又必须要 cookies, 这可怎么办 ### 1. 通过 express 取得 cookies 在 server.js 上引入 cookies 解析中间件
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" v-for="item in operation">
        <i class="iconfont" :class="`icon-${item.type}`"></i> 0 {{item.name}}
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      operation: [
        {
          type: 'praise',
          name: '赞'
        }, {
          type: 'comments',
          name: '评论'
        }, {
          type: 'browse',
          name: '浏览'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.card {
  border-radius: $border-radius;
  margin-top: $base-padding;
  .card-header{
    box-shadow: none;
    .card-header-title {
      font-weight: normal;
      color: #999;
      padding: $base-padding;
    }
    .card-header-time {
      align-items: center;
      cursor: default;
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: #999;
      padding: $base-padding;
    }
  }
  .card-title{
    font-weight: bold;
    padding: $base-padding;
    &:hover{
      color: rgba(0, 209, 178, 0.6);
    }
  }
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
}
</style>
