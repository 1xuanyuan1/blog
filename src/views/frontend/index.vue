<template lang="html">
  <div class="app-content">
    <div class="columns main container is-marginless">
      <div class="column is-two-thirds main-left">
        <article-card></article-card>
      </div>
      <div class="column main-right">
        <topics-card></topics-card>
        <trending-card></trending-card>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from 'components/ArticleCard'
import TopicsCard from 'components/TopicsCard'
import TrendingCard from 'components/TrendingCard'
import { ssp } from 'utils'
const fetchInitialData = async (store, config = { page: 1 }) => {
  const {params: {id, key, by}, path} = store.state.route
  const base = { ...config, limit: 10, id, key, by }
  store.dispatch('global/category/getCategoryList')
  store.dispatch('frontend/article/getTrending')
  await store.dispatch('frontend/article/getArticleList', base)
  if (config.page === 1) ssp(path)
}
export default {
  name: 'frontend-index',
  prefetch: fetchInitialData,
  components: {
    ArticleCard,
    TopicsCard,
    TrendingCard
  },
  watch: {
    '$route'() {
      fetchInitialData(this.$store, {page: 1})
    }
  },
  mounted () {
    fetchInitialData(this.$store, {page: 1})
  },
  metaInfo() {
    var title = 'DDuke 小屋'
    const {id, key, by} = this.$route.params
    if (id) {
      const obj = this.category.find(item => item._id === id)
      if (obj) {
          title = obj.cate_name + ' - ' + title
      }
    } else if (key) {
      title = '搜索: ' + key + ' - ' + title
    } else if (by) {
      title = '热门 - ' + title
    }
    return {
        title,
        meta: [{ vmid: 'description', name: 'description', content: title }]
    }
  }
}
</script>

<style lang="scss">
$base-padding: 24px;
.app-content {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

</style>
