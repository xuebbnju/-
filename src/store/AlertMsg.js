import Vue from 'vue'
export default {
  ErrAlert: function (message) {
  Vue.prototype.$message({
      message,
      type: 'error',
      showClose: true
    })
  },
  SuccAlert: function (message) {
    Vue.prototype.$message({
      message,
      type: 'success',
      showClose: true
    })
  },
  WarnAlert : function (message) {
    Vue.prototype.$message({
      message,
      type: 'warning',
      showClose: true
    })
  }
}
