<template lang="html">
  <div class="card">
    <div class="card-title">
      热门文章
    </div>
    <div class="card-list">
      <div class="card-item" v-for="i in 10" :key="i">
        <div class="rank-num">
          {{i}}
        </div>
        <div class="trending-content">
          <div class="trending-title title is-5">
            <strong>Vue2 SSR 的优化之旅</strong>
          </div>
          <div class="trending-menu">
            <div class="trending-menu-item">
              <i class="iconfont icon-praise"></i> <small>0</small>
            </div>
            <div class="trending-menu-item">
              <i class="iconfont icon-comments"></i> <small>0</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
$rank-size: 25px;
.card{
  border-radius: $border-radius;
  margin-top: $base-padding;
  .card-title{
    display: flex;
    justify-content: center;
    padding: $base-padding;
    font-size: 20px;
  }
  .card-list{
    padding-bottom: $base-padding / 2;
  }
  .card-item{
    padding: $base-padding / 2 $base-padding;
    display: flex;
    &:hover{
      cursor: pointer;
      .rank-num{
        opacity: 1;
      }
      .trending-title{
        color: $base-color;
      }
    }
    .rank-num{
      width: $rank-size;
      height: $rank-size;
      border-radius: 50%;
      background: $base-color;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      opacity: 0.6;
      margin-right: 20px;
    }
    .trending-content{
      color: #969f9f;
      .trending-title{
        margin-bottom: 10px;
        font-size: 18px;
      }
      .trending-menu{
        display: flex;
        .trending-menu-item:not(:last-child){
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
