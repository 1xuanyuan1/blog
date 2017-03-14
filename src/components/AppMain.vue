<template lang="html">
  <div class="app-content">
    <div class="columns main container is-marginless">
      <div class="column is-two-thirds main-left">
        <feed-card v-for="i in 10" :key="i"></feed-card>
      </div>
      <div class="column main-right">
        <topics-card></topics-card>
      </div>
    </div>
  </div>
</template>

<script>
import FeedCard from 'components/FeedCard'
import TopicsCard from 'components/TopicsCard'
export default {
  components: {
    FeedCard,
    TopicsCard
  }
}
</script>

<style lang="scss">
$base-padding: 24px;
.app-content {
  padding: $base-padding;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

</style>
