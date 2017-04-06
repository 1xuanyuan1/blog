<template lang="html">
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">关于作者</p>
    </div>
    <div class="card-content">
      <article class="media">
         <div class="media-left">
           <figure class="image is-64x64">
             <img src="~assets/img/logo.png" alt="Image"/>
           </figure>
         </div>
         <div class="media-content">
           <div class="content">
             <p><strong>戴文俊 Duke</strong> <small>@ 1992.04</small></p>
             <p>有热情,有追求,有理想的三有前端程序猿一只。</p>
           </div>
        </div>
      </article>
    </div>
    <div class="card-header">
      <p class="card-header-title">关于网站</p>
    </div>
    <div class="card-content">
      <p>本站服务端采用 express + mongoDB 搭建, 客户端采用 Vue2 的服务端渲染搭建</p>
      <p>网站分成前台和后台, 前台采用 SSR 模式渲染, 后台采用 SPA 模式</p>
      <p>主要功能包括: 管理员, 用户, 分类, 文章, 评论, 文章点赞</p>
      <p>主要技术栈: express, mongoose, vue2, vue2-router, vuex, webpack, babel, eslint</p>
      <p><small>本站大量借鉴了</small><a href="https://www.mmxiaowu.com"><small>@lincenying</small></a><small>的博客</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-card'
}
</script>

<style lang="scss" scoped>
.card-header-title{
  padding: 24px;
}
</style>
