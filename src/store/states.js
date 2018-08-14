import storageObj from './localstorage'
export default{
    user: storageObj.isexpired() && storageObj.get('user') || null,
    token: storageObj.isexpired() || null
}