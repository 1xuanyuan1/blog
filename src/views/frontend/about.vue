<template lang="html">
  <div class="about container">
    <div class="columns">
      <div class="column is-two-thirds main-left">
        <about-card></about-card>
      </div>
      <div class="column main-right">
        <trending-card></trending-card>
      </div>
    </div>
  </div>
</template>

<script>
import TrendingCard from 'components/TrendingCard'
import AboutCard from 'components/AboutCard'
const fetchInitialData = async store => {
    await store.dispatch('frontend/article/getTrending')
}
export default {
  name: 'frontend-about',
  prefetch: fetchInitialData,
  components: {
    AboutCard,
    TrendingCard
  },
  metaInfo () {
    return {
      title: '关于 - DDuke 小屋',
      meta: [{ vmid: 'description', name: 'description', content: 'DDuke 小屋' }]
    }
  }
}
</script>
