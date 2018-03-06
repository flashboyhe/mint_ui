<template>
  <div id="app">
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
     <router-link to="/form">表单数据收集</router-link>
      <router-link to="/ziluyou">子路由的页面</router-link>
    <img src="./assets/yifa.gif" style="width:100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: ' app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
