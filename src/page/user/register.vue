<template>
<div class="">
  <el-form :model="user" status-icon :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
        <el-input v-model.number="user.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="user.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">注册</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script >
import {mapActions} from 'vuex'
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
        if (this.user.checkPass !== '') {
          this.$refs.userForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      user: {
        password: '',
        checkPass: '',
        username: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'UserReg'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          delete this.user.checkPass
          this.UserReg(this.user)
        } else {
          console.log('error submit!!')
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
