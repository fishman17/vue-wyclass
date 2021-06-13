import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias:"/home",
      component: resolve => require(['@/views/Home/Home'], resolve),

    },
    {
      path: '/account',
      name: 'Account',
      component: resolve => require(['@/views/Account/Account'], resolve),
    },
    {
      path: '/mystudy',
      name: 'Mystudy',
      component: resolve => require(['@/views/Mystudy'], resolve),
    },
    {
      path: '/classify',
      name: 'Classify',
      component: resolve => require(['@/views/Classify'], resolve),
    },
    {
      path: '/home/coursedetails',
      name: 'Coursedetails',
      component: resolve => require(['@/views/Coursedetails/Coursedetails'], resolve),

    },
    {
      path: '/classifydetails',
      name: 'Classifydetails',
      component: resolve => require(['@/views/Classifydetails'], resolve),
      children:[
      ]
    },
    {
      path: '/home/search',
      name: 'search',
      component: resolve => require(['@/components/search'], resolve),

    },
    {
      path: '/account/login',
      name: 'login',
      component: resolve => require(['@/views/Login'], resolve),
    },
    {
      path:'/account/setting',
      component: resolve => require(['@/views/Account/setting'], resolve),
    },
    {
      path: '*',
      name: 'notfound',
      component: resolve => require(['@/components/NotFound'], resolve),
    },

  ]
})
