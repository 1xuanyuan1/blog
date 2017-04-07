<template lang="html">
  <div class="register">
    <div class="bg" @click.prevent="toggleRegister(false)"></div>
    <form class="content" @submit.prevent="register">
      <div class="btn-close" @click.stop="toggleRegister(false)">
        <i class="iconfont icon-close"></i>
      </div>
      <h1 class="title is-4">注册</h1>
      <div class="field">
        <p class="control has-icon">
          <input class="input" type="text" placeholder="昵称" v-model="params.username">
          <span class="icon is-small">
            <i class="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icon">
          <input class="input" type="email" placeholder="邮箱" v-model="params.email">
          <span class="icon is-small">
            <i class="fa fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icon">
          <input class="input" type="password" placeholder="密码" v-model="params.password">
          <span class="icon is-small">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icon">
          <input class="input" type="password" placeholder="重复密码" v-model="params.re_password">
          <span class="icon is-small">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-warning" @click="register">确定注册</button>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-info" type="button" @click.prevent="toLogin">直接登录</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { strlen } from 'utils'
import api from '~api'
export default {
  name: 'register-card',
  data () {
    return {
      params: {
        username: '',
        email: '',
        password: '',
        re_password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      toggleLogin: 'global/toggleLogin',
      toggleRegister: 'global/toggleRegister',
      showMessage: 'global/showMessage'
    }),
    async register () {
      if (!this.params.username || !this.params.password || !this.params.email) {
        this.showMessage('请将表单填写完整!')
        return
      }
      const { data: { message, code} } = await api.post('frontend/user/insert', this.params)
        if (code === 200) {
          this.showMessage({ content: message, type: 'success' })
          this.toLogin()
        }
    },
    toLogin () {
      this.toggleRegister(false)
      this.toggleLogin(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.register{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .bg{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
  }
  .content{
    width: 400px;
    height: 500px;
    padding: 50px 0;
    background: white;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 4;
    .field{
      width: 80%;
      .button{
        width: 100%;
      }
    }
    .btn-close {
      position: absolute;
      top: $base-padding;
      right: $base-padding;
      color: $base-font-color;
      &:hover{
        color: $active-font-color;
        cursor: pointer;
      }
    }
  }
}
</style>
