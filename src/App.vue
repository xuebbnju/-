<template>
  <div class="page">
    <Menu></Menu>
    <div class="menu-fix"></div>
    <div class="wrapper">
       <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/pages/header/menu.vue'
import Footer from '@/pages/footer/index.vue'
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
.menu-fix{
  height: 60px;
  width: 100%;
}
.body{
  background: #f5f6f7;
  height: 100%;
}

</style>
