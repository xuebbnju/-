<template>
<div class="manage-box">
  <el-table :data="blogList" stripe style="width: 100%">
    <el-table-column prop="date" label="日期" width="200"></el-table-column>
    <el-table-column prop="title" label="标题" width="500"></el-table-column>
    <el-table-column label="操作" width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script >
import {mapState} from 'vuex'
import api from '../../api'
import router from '../../router/index.js'
import AlertMsg from '../../store/AlertMsg'
export default {
  name: 'Detail',
  data () {
    return {
      blogList: []
    }
  },
  methods: {
    handleEdit (row) {
      router.push({name: 'BlogUpdate', params: {postId: row.postId}})
    },
    handleDelete (row) {
      let postId = row.postId
      api.deleteBlog({postId})
        .then((res) => {
          if (res.data && res.data.code === 200) {
            AlertMsg('删除成功！')
            router.go(0)
          } else {
            AlertMsg(res.data.msg)
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
  mounted () {
    api.getUserBlogList(this.user)
      .then((res) => {
        if (res.data && res.data.code === 200) {
          let data = res.data
          this.blogList = data.blogList
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
.manage-box{
  margin: 40px 0;
}
.blog-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    height: 24px;
}
</style>
