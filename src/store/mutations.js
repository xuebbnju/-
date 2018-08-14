import {USER_LOGIN, USER_LOGOUT, USER_REG} from './types'
import storageObj from './localstorage'
export default {
  [USER_LOGIN] (state, data) {
    state.token = data.token
    state.user = data.user
    storageObj.set('jwt', data.token)
    storageObj.set('user', data.user)

  },
  [USER_REG] (state, data) {
    state.token = data.token
    state.user = data.user
    storageObj.set('jwt', data.token)
    storageObj.set('user', data.user)
  },
  [USER_LOGOUT] (state) {
    state.token = null
    state.user = null
    storageObj.remove('jwt')
    storageObj.remove('user')
  }
}
