import api from '../api'
import AlertMsg from './AlertMsg'
import router from '../router/index'
export default {
  UserReg ({commit}, data) {
    api.localReg(data)
      .then((res)=>{
        if(res.data && res.data.code==200){
          let data = {}
          data.token = res.data.token
          data.user = res.data.user
          commit('USER_REG', data)
          router.replace({path: '/home'})
        }else{
          AlertMsg(res.data.msg)
        }
      })
      .catch((err)=>{
        AlertMsg(err.msg || err.toString())
      })
  },
  UserLogin ({commit}, data) {
    api.localLogin(data)
      .then((res)=>{
        if(res.data && res.data.code==200){
          let data = {}
          data.token = res.data.token
          data.user = res.data.user
          commit('USER_LOGIN', data)
          router.replace({path: '/home'})
        }else{
          AlertMsg(res.data.msg)
        }
      })
      .catch((err)=>{
        AlertMsg(err.data.msg || err.toString())
      })
  },
  UserLogout ({commit}) {
    commit('USER_LOGOUT')
    router.replace({path: '/user'})
  }
}
