<template>
  <div class="page">

    <router-link to="/single">单个词汇</router-link>
    <router-link to="/multiple">多个词汇</router-link>
    <router-link to="/">矩阵词汇</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 100px 0 0 ;
}
  a {
    display:block;
    margin: 0 auto 10px;
    width:80%;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    line-height: 60px;
    background: #f1f1f1;;
  }
</style>

