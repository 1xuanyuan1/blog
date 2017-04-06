<template lang="html">
  <div class="feeds">
    <div class="card" v-if="!lists.path">
      <loading></loading>
    </div>
    <div class="card" v-for="(item, i) in feedList" :key="i">
      <header class="card-header">
        <p class="card-header-title">
          来着分类<strong>{{item.category_name}}</strong>
        </p>
        <p class="card-header-time">
          {{item.creat_date}}
        </p>
      </header>
      <a class="card-title">
        {{item.title}}
      </a>
      <div class="card-content">
        <div class="content">
          {{item.content}}
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" v-for="it in operation">
          <i class="iconfont" :class="`icon-${it.type}`"></i> {{item[it.key]}} {{it.name}}
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'components/Loading'
export default {
  name: 'article-card',
  computed: {
    ...mapGetters({
      lists: 'frontend/article/articleList'
    }),
    feedList () {
      return this.lists.data
    }
  },
  components: {
    Loading
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
