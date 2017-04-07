<template lang="html">
  <div class="card">
    <div class="card-item" v-for="item in list" :key="item._id" v-if="item.cate_num > 0" @click="skip(item._id)">
      <div class="card-item-left">
        <i class="iconfont icon-topics"></i>
        <div class="card-item-content">
          <p class="title is-5"><strong>{{item.cate_name}}</strong></p>
          <p class="subtitle is-6">{{item.cate_num}}篇文章</p>
        </div>
      </div>
      <div class="card-item-right">
        <i class="iconfont icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'topics-card',
  computed: {
    ...mapGetters({
      list: 'global/category/categoryList'
    })
  },
  mounted () {
    // console.log('test111aaggg')
  },
  methods: {
    skip (id) {
      this.$router.push({ name: 'category', params: { id } })
    }
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
