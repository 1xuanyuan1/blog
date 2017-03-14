<template lang="html">
  <div class="card">
    <div class="card-item" v-for="i in 10" :key="i">
      <div class="card-item-left">
        <i class="iconfont icon-topics"></i>
        <div class="card-item-content">
          <p class="title is-5"><strong>Vue</strong></p>
          <p class="subtitle is-6">3篇文章</p>
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
}
</script>

<style lang="scss" scoped>
$base-padding: 24px;
$border-radius: 8px;
$border-color: #eef2f2;
$base-color: #00d1b2;
.card {
  border-radius: $border-radius;
  margin-top: $base-padding;
  .card-item {
    padding: $base-padding;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
      .title {
        color: $base-color;
      }
      .icon-right{
        color: #4a4a4a;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid $border-color;
    }
    .card-item-left {
      display: flex;
      align-items: center;
      .icon-topics{
        font-size: 40px;
        margin-right: 20px;
        color: #ed4656;
      }
    }
    .icon-right{
      font-size: 25px;
      color: #ccc;
    }
  }
}
</style>
