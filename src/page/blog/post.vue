<template>
<div class="blog-box">
        <div class="blog-title">
            <el-row :gutter="20">
                <el-col :span="18"><el-input placeholder="博客标题" v-model="blog.title" clearable></el-input></el-col>
                <el-col :span="6"><el-button type="primary"  @click="postBlog">发布博客</el-button></el-col>
            </el-row>
        </div>
        <div class="blog-content">
            <mavon-editor v-model="blog.content"/>
        </div>
</div>
</template>
<script >
import {mapState} from 'vuex'
import AlertMsg from '../../store/AlertMsg'
import api from '../../api'
import router from '../../router/index.js'
export default {
  name: 'Detail',
  data () {
    return {
        blog: {}
    }
  },
  methods: {
    postBlog () {
      this.blog.author = this.user.username
      api.postBlog(this.blog)
        .then((res) => {
          if (res.data && res.data.code == 200) {
            AlertMsg('发布成功！')
            router.push({name: 'Home'})
          } else {
            AlertMsg(res.data.msg);
          }
        })
        .catch((err) => {
          AlertMsg(err.msg || err.toString())
        })

      }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {}
}
</script>
<style  scoped>
.blog-box{
    padding: 24px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
}

.blog-content{
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
  padding: 15px 0;
  font-size: 14px;
  color: #333;
  min-block-size: 600px;
}
</style>
