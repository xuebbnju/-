var storageObj = {
  set: function (key, item) {
    if (key !== 'jwt') {
      item = JSON.stringify(item)
    }
    localStorage.setItem(key, item)
  },
  get: function (key) {
    let item = localStorage.getItem(key) || ''
    if (key !== 'jwt') {
      item = JSON.parse(item)
    }
    return item
  },
  remove: function (key) {
    localStorage.removeItem(key)
  },
  isexpired: function () {
    let token = this.get('jwt')
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]))
      if (payload.exp > Date.now() / 1000) {
        return token
      }
    }
    return false
  }
}
export default storageObj