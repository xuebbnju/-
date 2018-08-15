<template>
<div class="blog-box">
        <div class="blog-title">
            <el-row :gutter="20">
                <el-col :span="18"><el-input placeholder="博客标题" v-model="blog.title" clearable></el-input></el-col>
                <el-col :span="6"><el-button type="primary" @click="updateBlog">发布博客</el-button></el-col>
            </el-row>
        </div>
        <div class="blog-abstract">
          <el-input v-model="blog.abstract" placeholder="摘要"></el-input>
        </div>
        <div class="blog-content">
            <mavon-editor v-model="blog.content"/>
        </div>
</div>
</template>
<script >
import api from '../../api'
import router from '../../router/index.js'
import AlertMsg from '../../store/AlertMsg'
export default {
  name: 'Detail',
  data () {
    return {
        blog: {}
    }
  },
  methods: {
    updateBlog () {
        if(!this.blog.title || !this.blog.abstract || !this.blog.content){
          AlertMsg.WarnAlert('请填写完整再发布！')
          return ;
        }
        api.updateBlog(this.blog)
          .then((res) => {
            if (res.data && res.data.code==200) {
              AlertMsg.SuccAlert('修改成功！')
              router.push({name: 'BlogDetail', params: {postId: this.postId}})
            } else {
              AlertMsg.ErrAlert(res.data.msg);
            }
          })
          .catch((err)=>{
            AlertMsg.ErrAlert(err.msg || err.toString())
          })
    }
  },
  computed: {
    postId () {
      return this.$route.params.postId
    }
  },
  mounted () {
    let postId = this.postId;
    api.getBlogDetail({postId})
      .then((res)=>{
        if (res.data && res.data.code==200) {
          let data = res.data
          this.blog = data.blog
        } else {
          AlertMsg.ErrAlert(res.data.msg)
        }
      })
      .catch((err)=>{
        AlertMsg.ErrAlert(err.msg || err.toString());
      })
  }
}
</script>
<style  scoped>
.blog-box{
    padding: 24px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
}
.blog-abstract{
  margin-top: 20px;
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
