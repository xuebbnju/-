import axios from 'axios'
// import store from '../store'
import storageObj from '../store/localstorage'
axios.defaults.headers.post['Content-Type'] = 'application/json'
const root = ''
const instance = axios.create()
// instance.defaults.headers.post['Content-Type'] = 'application/json'
if(storageObj.get('jwt')){
      /* localStorage.getItem('jwt')是带引号的字符串
    Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
  */
  instance.defaults.headers.post['x-access-token'] = storageObj.get('jwt').replace(/(^\")|(\"$)/g,'')
}
export default {
  localReg(data){
    return axios.post(root + '/api/user/register', data)
  },
  localLogin(data){
    return axios.post(root + '/api/user/login', data)
  },
  getUserBlogList(data){
    return instance.post(root + '/api/blog/getByAuthor', data)
  },
  getBlogDetail(data){
    return instance.post(root + '/api/blog/getById', data)
  },
  postBlog(data){
    return instance.post(root + '/api/blog/post', data)
  },
  deleteBlog(data){
    return instance.post(root + '/api/blog/deleteById', data)
  },
  updateBlog(data){
    return instance.post(root + '/api/blog/update', data)
  }
}