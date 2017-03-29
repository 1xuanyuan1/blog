<template lang="html">
  <div class="card">
    <div class="card-item" v-for="i in 10" :key="i">
      <div class="card-item-left">
        <i class="iconfont icon-topics"></i>
        <div class="card-item-content">
          <p class="title is-5"><strong>Vue</strong></p>
          <p class="subtitle is-6" v-if="i % 2 === 0">7篇文章</p>
          <p class="subtitle is-6" v-else>10篇文章</p>
        </div>
      </div>
      <div class="card-item-right">
        <i class="iconfont icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('test111aaggg')
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.card {
  border-radius: $border-radius;
  margin-top: $base-padding;
  .card-item {
    padding: $base-padding;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card-item-left {
      display: flex;
      align-items: center;
      .icon-topics{
        font-size: 40px;
        margin-right: 20px;
        color: rgba(237, 70, 86, 0.5);
      }
    }
    .icon-right{
      font-size: 25px;
      color: #ccc;
    }
    &:hover {
      cursor: pointer;
      .title {
        color: $base-color;
      }
      .icon-right{
        color: #4a4a4a;
      }
      .card-item-left .icon-topics{
        color: #ed4656;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
