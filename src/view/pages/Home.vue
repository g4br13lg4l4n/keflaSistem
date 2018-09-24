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

import MenuRight from '../components/menuRight'
import Head from '../components/Head'
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
    height: 100%;
    padding-left: 260px;
  }
</style>
