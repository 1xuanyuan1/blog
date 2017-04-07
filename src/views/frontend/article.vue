<template lang="html">
  <div class="article container">
    <div class="columns is-marginless">
      <div class="column is-two-thirds main-left">
        <div class="card">
          <div class="card-content">
            <router-link :to="`/category/${article.data.category}`" class="tag is-medium">{{article.data.category_name}}</router-link>
            <h1 class="title is-4">{{article.data.title}}</h1>
          </div>
        </div>
        <div class="card markdown-card">
          <div class="card-content">
            <div class="article-content markdown-body" v-html="article.data.html"></div>
          </div>
          <item-action :item="article.data"></item-action>
        </div>
      </div>
      <div class="column main-right">
        <topics-card key="topics-card"></topics-card>
        <trending-card key="trending-card"></trending-card>
      </div>
    </div>
  </div>
</template>

<script>
import TopicsCard from 'components/frontend/TopicsCard'
import TrendingCard from 'components/frontend/TrendingCard'
import ItemAction from 'components/frontend/ItemAction'
import { mapGetters } from 'vuex'
const fetchInitialData = async store => {
    store.dispatch('global/category/getCategoryList')
    store.dispatch('frontend/article/getTrending')
    // store.dispatch(`global/comment/getCommentList`, { page: 1, limit: 5})
    await store.dispatch(`frontend/article/getArticleItem`)
}
export default {
  name: 'frontend-article',
  prefetch: fetchInitialData,
  components: {
    TopicsCard,
    TrendingCard,
    ItemAction
  },
  computed: {
    ...mapGetters({
      article: 'frontend/article/articleItem',
    })
  },
  methods: {
    addTarget(content) {
      if (!content) return ''
      return content
    }
  },
  mounted() {
    fetchInitialData(this.$store)
  },
  watch: {
    '$route'() {
      fetchInitialData(this.$store)
    }
  },
  metaInfo () {
    const title = `${this.article.data.title} - DDuke 小屋`
    return {
      title,
      meta: [{ vmid: 'description', name: 'description', content: title }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.article{
  .main-left{
    .card{
      .tag{
        background: #effcfc;
        border: 1px solid #99e8ed;
        color: $base-color;
        &:hover{
          background: $base-color;
          color: white;
        }
      }
      .title{
        margin-top: $base-padding;
      }
    }
  }
}
</style>
