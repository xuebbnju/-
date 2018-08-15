<template>
<div class='blog-box' v-if="blog">
    <div class='blog-item' >
        <div class='blog-title'>
          <h2>{{blog.title}}</h2>
        </div>
        <div class='blog-info'>
        {{blog.date}}
        </div>
        <div class='blog-content' v-html="blog.content">
        <!-- {{blog.content}} -->
        </div>
    </div>
</div>
</template>
<script >
import api from '../../api'
import router from '../../router/index.js'
import AlertMsg from '../../store/AlertMsg'
import mavonEditor from 'mavon-editor'
export default {
  name: 'Detail',
  data () {
    return {
      blog: {}
    }
  },

  computed: {
    postId () {
      return this.$route.params.postId
    },
   
  },
  mounted () {
    let postId = this.postId
    api.getBlogDetail({postId})
      .then((res) => {
        if (res.data && res.data.code === 200) {
          let data = res.data
          this.blog = data.blog
          this.blog.content = mavonEditor.markdownIt.render(data.blog.content) 
          let date = this.blog.date.split('')
          date.splice(10, 23, '')
          this.blog.date = date.join('')
        } else {
          AlertMsg(res.data.msg)
        }
      })
      .catch((err) => {
        AlertMsg(err.msg || err.toString())
      })
  }
}
</script>
<style  scoped>
.blog-item{
  margin: 40px 0;
    padding: 24px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
}
.blog-title h2{
    font-size: 24px;
    text-align: center;
}
.blog-content{
  border-top: 1px solid #e0e0e0;
  padding: 15px 0;
  font-size: 14px;
  line-height: 1.57142857;
  text-indent: 2em;
  color: #333;
  word-wrap:break-word;
}
.blog-info{
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #858585;
}
</style>
