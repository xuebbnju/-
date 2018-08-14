import Home from '@/page/Home'
import BlogDetail from '@/page/blog/detail'
import BlogManage from '@/page/blog/manage'
import BlogPost from '@/page/blog/post'
import BlogUpdate from '@/page/blog/update'
import UserPro from '@/page/user/profile'
import User from '@/page/user/index'
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
  {
    path: '/profile',
    name: 'UserPro',
    component: UserPro
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]
