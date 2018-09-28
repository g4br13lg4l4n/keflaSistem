<template>
  <div class="app-body">
    <Head/>
    <MenuRight/>
    <main class="main">
      <div class="container-fluid">
         <router-view></router-view>
      </div>
    </main>    
  </div>
</template>

<script>

import MenuRight from '../components/menuRight.vue'
import Head from '../components/head.vue'
  export default {
    name: 'Home',
    components: {MenuRight, Head}
  }
</script>

<style>
  .app-body {
    height: 100%;
  }
  main.main {
    height: calc(100% - 50px) ;
    padding-left: 230px;
    overflow-y: scroll;
  }
</style>
