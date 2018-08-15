<template>
  <div class="tab-box">
    <el-tabs type="border-card">
        <el-tab-pane label="登陆" ><UserLogin></UserLogin></el-tab-pane>
        <el-tab-pane label="注册" ><UserReg></UserReg></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserLogin from '@/pages/user/login'
import UserReg from '@/pages/user/register'
export default {
  name: 'App',
  components: {
    UserLogin,
    UserReg
  },
  methods: {}
}
</script>

<style scoped>
.tab-box{
    width: 700px;
    margin: 100px auto 400px auto;
}
.el-tabs__item{
    width: 351px !important;
    text-align: center !important;
}
</style>
