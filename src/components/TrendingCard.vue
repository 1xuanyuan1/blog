<template lang="html">
  <div class="card">
    <div class="card-title">
      热门文章
    </div>
    <div class="card-list">
      <div class="card-item" v-for="(item, i) in list" :key="i">
        <div class="rank-num">
          {{i + 1}}
        </div>
        <div class="trending-content">
          <div class="trending-title title is-5">
            <strong>{{item.title}}</strong>
          </div>
          <div class="trending-menu">
            <div class="trending-menu-item">
              <i class="iconfont icon-praise"></i> <small>{{item.like}}</small>
            </div>
            <div class="trending-menu-item">
              <i class="iconfont icon-comments"></i> <small>{{item.comment_count}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'trending-card',
  computed: {
    ...mapGetters({
      list: 'frontend/article/trending'
    })
  }
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
