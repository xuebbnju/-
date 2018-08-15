<template>
<div class='blog-box'>
    <div class='blog-item' >
        <div class='blog-title'>
          <h2>{{blog.title}}</h2>
        </div>
        <div class='blog-info'>
        {{blog.date}}
        </div>
        <div class='blog-content'>
        {{blog.content}}
        </div>
    </div>
</div>
</template>
<script >
// import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      blog: {
        postId: 1,
        title: '123',
        content: '234ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        date: '2018-12-1'
      }
    }
  },
  methods: {},
  mounted () {}
}
</script>
<style  scoped>
.blog-item{
    padding: 0 24px 24px;
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
}
.blog-info{
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #858585;
}
</style>
