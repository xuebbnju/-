<template>
<div class="header">
  <div class="wrapper">
    <el-menu :default-active="activeIndex"  class="el-menu-demo " mode="horizontal"  @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-row>
        <el-col :span="2">
          <el-menu-item index="1" :disabled="!isLogin"><router-link :to="{ name: 'Home'}">首页</router-link></el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="2" :disabled="!isLogin"><router-link :to="{ name: 'BlogManage'}">文章管理</router-link></el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-submenu index="3" disabled>
            <template slot="title" >标签</template>
            <el-menu-item index="3-1">标签查找</el-menu-item>
            <el-menu-item index="3-2">标签管理</el-menu-item>
          </el-submenu>
        </el-col >
        <el-col :span="2" :offset="isLogin?10:14">
          <el-menu-item index="4" :disabled="!isLogin"><router-link :to="{ name: 'BlogPost'}">写博客</router-link></el-menu-item>
        </el-col>
        <el-col :span="2" v-if="!isLogin" >
          <el-menu-item index="5" ><router-link :to="{ name: 'User'}">登陆/注册</router-link></el-menu-item>
        </el-col>
        <el-col :span="4">
          <a class="username" v-if="isLogin">{{user.username}}欢迎你！</a>
        </el-col>
        <el-col :span="2">
          <a v-if="user" @click="logOut">登出</a>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import router from '../../router'
export default {
  data () {
    return {
      activeIndex: router.currentRoute.name === 'Home' ? '1' : (router.currentRoute.name === 'User' ? '5' : (router.currentRoute.name === 'BlogPost' ? '4' : '2'))
    }
  },
  computed: {
    ...mapState(['user']),
    isLogin () {
      return !!this.user;
    }
  },
   watch: {
    '$route' (to, from) {
      let name = to.name;
      this.activeIndex = '1'
      if( name === 'Home'){

      } else if(name === "User"){
        this.activeIndex = '5'
      } else if(name === "BlogPost") {
        this.activeIndex = '4'
      } else {
        this.activeIndex = '2'
      } 
    }
  },
  methods: {
    ...mapActions([
      'UserLogout'
    ]),
    handleSelect (key, keyPath) {
    },
    logOut () {
      this.UserLogout()

    }
  }
}
</script>
<style  scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 60px; */
  background: #545c64;
  z-index: 1600;
}
.username{
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.el-col a{
  color: #fff;
  text-decoration: none;
  height: 55px;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 55px;
  cursor: pointer;
}
.el-col li{
  padding: 0;
}
.is-active a{
  color: rgb(255, 208, 75);
  border-bottom-color: rgb(255, 208, 75);
  background-color: rgb(84, 92, 100);
}
</style>
