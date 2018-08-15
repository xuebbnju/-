<template>
<div class="">
  <el-form :model="user" status-icon :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
        <el-input v-model.number="user.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input  type="password" v-model="user.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">登陆</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script >
import {mapActions} from 'vuex'
import AlertMsg from '../../store/AlertMsg'
export default {
  name: 'Detail',
  data () {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      user: {
        password: '',
        username: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'UserLogin'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.UserLogin(this.user)
        } else {
          AlertMsg.ErrAlert('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {}
}
</script>
<style  scoped>
</style>
