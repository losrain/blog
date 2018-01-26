import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import register from '@/view/register'
import artice from '@/view/artice'
import acticelist from '@/view/acticelist'
// user
import user from '@/view/user'
import userLogin from '@/view/user/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/user'
    },
    {
      path:'/user',
      component:user,
      redirect: '/user/login',
      children: [{
        path: 'login',
        name: 'userLogin',
        component: userLogin
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/artice',
      name: 'artice',
      component: artice
    }, {
      path: '/acticelist',
      name: 'acticelist',
      component: acticelist
    }
  ]
})
