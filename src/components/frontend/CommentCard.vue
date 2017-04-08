<template lang="html">
  <div class="card">
    <div class="comment-form comment-content">
      <article class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="~assets/img/logo.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <textarea id="content" class="textarea" v-model="params.content"></textarea>
            <div class="button is-primary" @click="postComment">
              发布评论
            </div>
          </div>
        </div>
      </article>
    </div>
    <div class="comment-content">
      <article class="media" v-for="item in lists" :key="item._id">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="~assets/img/logo.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong class="name">{{item.username}}</strong><br />
              <span>{{item.content}}</span><br />
              <small class="time">{{item.creat_date}} <a @click="reply(item)">回复</a></small>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import api from '~api'
import cookies from 'js-cookie'
export default {
  computed: {
    ...mapGetters({
      list: 'global/comment/commentList'
    }),
    lists () {
      return this.list.data
    }
  },
  data () {
    return {
      params: {
        id: this.$route.params.id,
        content: ''
      }
    }
  },
  methods: {
    ...mapActions({
      toggleLogin: 'global/toggleLogin',
      showMessage: 'global/showMessage',
      insertCommentItem: 'global/comment/insertCommentItem'
    }),
    async postComment() {
      const user = cookies.get('user')
      if (!user) {
        this.showMessage('请先登录!')
        this.toggleLogin(true)
        return
      }
      if (this.params.content === '') {
        this.showMessage('请输入评论内容!')
        return
      }
      const { data: { code, data } } = await api.post('frontend/comment/insert', this.params)
      if (code === 200) {
        this.params.content = ''
        this.showMessage({ content: '评论发布成功!', type: 'success' })
        this.insertCommentItem(data)
      }
    },
    reply (item) {
      this.params.content = '回复 @'+ item.username + ': '
      document.querySelector("#content").focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.comment-content{
  padding: $base-padding;
  figure{
    img {
      border-radius: 50%;
    }
  }
  .name{
    color: $base-color;
  }
  .time{
    color: $base-font-color;
    a {
      color: $base-font-color;
      &:hover{
        color: $active-font-color;
      }
    }
  }
  &.comment-form{
    .content{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .textarea{
        min-height: 100px;
        margin-bottom: 10px;
        background: #f4f7f7;
        border-radius: 4px;
        appearance: none;
      }
    }
  }
}
</style>
