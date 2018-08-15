// import {resolve } from 'dns'
// const Home = (resolve) => {
//   import ('../page/Home').then((module) => {
//     resolve(module)
//   })
// }
// const BlogDetail = (resolve) => {
//   import ('../page/blog/detail').then((module) => {
//     resolve(module)
//   })
// }
// const BlogManage = (resolve) => {
//   import ('../page/blog/manage').then((module) => {
//     resolve(module)
//   })
// }
// const BlogPost = (resolve) => {
//   import ('../page/blog/post').then((module) => {
//     resolve(module)
//   })
// }
// const BlogUpdate = (resolve) => {
//   import ('../page/blog/update').then((module) => {
//     resolve(module)
//   })
// }
// const UserPro = (resolve) => {
//   import ('../page/user/profile').then((module) => {
//     resolve(module)
//   })
// }
// const User = (resolve) => {
//   import ('../page/user/index').then((module) => {
//     resolve(module)
//   })
// }
const Home = resolve => require(['@/pages/home'], resolve)
const BlogDetail = resolve => require(['@/pages/blog/detail'], resolve)
const BlogManage = resolve => require(['@/pages/blog/manage'], resolve)
const BlogPost = resolve => require(['@/pages/blog/post'], resolve)
const BlogUpdate = resolve => require(['@/pages/blog/update'], resolve)
const User = resolve => require(['@/pages/user/index'], resolve)
// import Home from '@/pages/Home'
// import BlogDetail from '@/pages/blog/detail'
// import BlogManage from '@/pages/blog/manage'
// import BlogPost from '@/pages/blog/post'
// import BlogUpdate from '@/pages/blog/update'
// import User from '@/pages/user/index'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/detail/:postId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/manage',
    name: 'BlogManage',
    component: BlogManage
  },
  {
    path: '/blog/post',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/blog/update/:postId',
    name: 'BlogUpdate',
    component: BlogUpdate
  },
  // {
  //   path: '/profile',
  //   name: 'UserPro',
  //   component: UserPro
  // },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]
