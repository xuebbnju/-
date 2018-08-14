<template>
<div>
  <div class='home-img'>
   <div class='home-img-text'>
     <span>记录美好从这里开始！</span>
   </div>
</div>
<div class='blogs-box'>
      <div class='blog-item' v-for='item in blogList' :key='item.postId'>
          <div class='blog-title'>
            <router-link :to="{ name: 'BlogDetail', params: {postId: item.postId }}">{{item.title}}</router-link>
          </div>
          <div class='blog-content' v-html="item.content" >
          </div>
          <div class='blog-info'>
            {{item.date}}
          </div>
      </div>
   </div>
</div>
</template>
<script >
import {mapState} from 'vuex'
import api from '../api'
import AlertMsg from '../store/AlertMsg'
import mavonEditor from 'mavon-editor'
export default {
  name: 'Detail',
  data () {
    return {
      blogList: []
    }
  },
  methods: {},
  computed: {
    ...mapState(['user']),
  },
  mounted () {
    api.getUserBlogList(this.user)
      .then((res) => {
        if (res.data && res.data.code === 200) {
          let data = res.data
          this.blogList = data.blogList
          this.blogList.forEach(function (item) {
              item.content = mavonEditor.markdownIt.render(item.content)
              let date = item.date.split('')
              date.splice(10, 23, '')
              item.date = date.join('')
          });
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
.home-img{
  background: url('../assets/img/bgm.jpg') no-repeat center /cover;
  height: 140px;
  position: relative;
}
.home-img-text{
   position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 140px;
    line-height: 140;
    text-align: center;
    color: #000;
    background:rgba(255,255,255,0.3);
}
.blog-item{
    padding: 18px 24px;
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    position: relative;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
}
 a{
  color: #3d3d3d;
  text-decoration: none;
}
.blog-item:hover{
    background: #fafafa;
}
.blog-title{
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    height: 24px;
    margin-bottom: 4px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.blog-content{
  margin-bottom: 4px;
  font-size: 15px;
  color: #8a8a8a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
  height: 40px;
  width: 100%;
}

.blog-info{
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  text-align: right;
}
</style>
