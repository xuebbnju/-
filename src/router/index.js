import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import storageObj from '../store/localstorage'
Vue.use(Router)
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}
const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior

})
router.beforeEach(({meta, path}, from, next) => {
  let isLogin = storageObj.isexpired()
  if (!isLogin && path !== '/user') {
    return next({path: '/user'})
  }
  if (isLogin && (path === '/user')) {
    return next({path: '/home'})
  }
  next()
})
export default router
