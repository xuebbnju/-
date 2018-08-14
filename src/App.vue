<template>
  <div class="page">
    <Menu></Menu>
    <div class="menu-fix"></div>
    <div class="wrapper">
      <div class="height-fix"><router-view/></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/page/header/menu.vue'
import Footer from '@/page/footer/index.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
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
.wrapper{
  width: 70%;
  margin: 0 auto;
}
.height-fix{
  min-height: 600px;
}
.menu-fix{
  height: 60px;
  width: 100%;
}
.page{
  background: #f5f6f7;
}

</style>
