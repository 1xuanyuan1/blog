<template lang="html">
  <div class="login">
    <div class="bg" @click.prevent="toggleLogin(false)"></div>
    <form class="content" @submit.prevent="login">
      <div class="btn-close" @click.stop="toggleLogin(false)">
        <i class="iconfont icon-close"></i>
      </div>
      <h1 class="title is-4">登录</h1>
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
          <input class="input" type="password" placeholder="密码" v-model="params.password">
          <span class="icon is-small">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-warning" type="submit"><p>确定登录</p></button>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-info" type="button" @click.prevent="toRegister"><p>我要注册</p></button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '~api'
export default {
  name: 'login-card',
  data () {
    return {
      params: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      toggleLogin: 'global/toggleLogin',
      toggleRegister: 'global/toggleRegister',
      showMessage: 'global/showMessage'
    }),
    toRegister () {
      this.toggleLogin(false)
      this.toggleRegister(true)
    },
    async login () {
      if (!this.params.username || !this.params.password) {
        this.showMessage('请将表单填写完整!')
        return
      }
      const { data: { message, code} } = await api.post('frontend/user/login', this.params)
      if (code === 200) {
        this.showMessage({content: message, type: 'success'})
        this.$router.go(0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.login{
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
    height: 400px;
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
        p{
          width: 100%;
          text-align: center;
        }
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
